import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Drawer } from 'antd';
import { useRouter } from 'next/router';
import { SettingOutlined } from '@ant-design/icons';
import WalletConnectHeader from './WalletConnectHeader';
import { Nav } from 'react-bootstrap'
import { useAuth } from '../utils/auth';
import { useWallet } from '../utils/wallet';

interface LinkProp {
  forSideBar?: boolean;
}
const navItems = [
  {
    text: 'Home',
    link: 'https://ninjaprotocol.io/',
  },
  {
    text: 'Profile ',
    link: '/',
  },
  {
    text: 'Leaderboard',
    link: 'https://ninjaprotocol.io/leaderboard/',
  },
  {
    text: 'About Us',
    link: 'https://docs.ninjaprotocol.io/',
  },
  // {
  //   text: 'Packs',
  //   link: '/packs',
  // },
  // {
  //   text: 'News',
  //   link: '/news',
  // },
];

export default function Header() {
  const { isAuthenticated } = useAuth();
  const { connected, connect, disconnect, select } = useWallet();
  const [mobilemenu, setMobilemenu] = useState(false)
  const onConnect = () => {
    if (!connected) {
      connect();
    } else {
      disconnect();
    }
  };
  const changeWallet = () => {
	 if (connected) {
      disconnect();
    } 
	select();
  }
  
  const showmobilemenu = () => {
    setMobilemenu(!mobilemenu)
  };
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const handleCloseSidebar = () => {
    setVisible(false);
  };

  const showSidebar = () => {
    setVisible(true);
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4 w-100" >
      <div className="container-fluid g-0 topnav" style={{ padding: '0 5%' }}>
        <div className="row no-gutters margin-nav-auto p-1">
          <div className="col-4 col-4k-4" style={{ marginTop: 14 }} id="logo-div">
            <img src="/LOGO_SOL_NOBG.png" id="brand" alt="" className="d-inline-block align-text-top" width="40" height="40" />
          </div>
          <div className="col-6  col-4k-6" style={{ marginTop: 14 }}>
            <a className="navbar-brand text-uppercase text-bold p-0 fw-bold" href="#">Ninja-DEX</a>
          </div>
        </div>
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span onClick={showmobilemenu} className="navbar-toggler-icon py-3"></span>
        </button>
        <div className={mobilemenu ? "collapse navbar-collapse row show" : "collapse navbar-collapse row"} id="navbarNav">
          <div className="col-12 col-md-6  col-4k-6">
            <ul className="navbar-nav mx-4">

              {navItems.map((navItem, index) => (
                <li key={index} className="nav-item  py-3 px-0">
                  <Link key={index} href={navItem?.link}>
                    <a target="_blank" href={navItem?.link} className={router.pathname === navItem?.link ? 'nav-link fs-6 text-bold font-18 text-white active' : 'nav-link fs-6 text-bold font-18 text-white'}>
                      {navItem?.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 ">
            <ul className="navbar-nav right-nav">

              <li className="nav-item">
                <span><a href="#"> <SettingOutlined style={{ fontSize: 26, color: '#ffff', marginRight: 30, marginTop: 8 }} /></a></span>
                <a href="#" onClick={onConnect} className="btn btn-default text-white" style={{ backgroundColor: '#851cef', borderRadius: 6 }}><img src='/ion_wallet-outline.png' alt="wallet_icon" /> {connected ? 'Disconnect' : 'Connect'}
                  <img src='/limit_arrow.svg' style={{ marginLeft: 4 }} alt="arrow" /></a>
              </li>
			  <li><a href="#" onClick={changeWallet} style= {{ paddingLeft: '15px', lineHeight: '45px' }}>Change Wallet</a></li>
            </ul>
          </div>

        </div>

      </div>
    </Nav>
  );
}
