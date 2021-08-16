import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #12151D;
  color: white;
  font-size: 1em;
}

.bg-dark{
  background-color:#1F2331 !important;
}
.navbar .navbar-nav .nav-link{
  color: #fff !important;
  position: relative;
}
.right-nav{
  float: right ;
}
.navbar .navbar-nav .nav-link::after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #6822b8;
  color: transparent;
  width: 0%;
  content: '.';
  height: 0.2em;
}
.navbar .navbar-nav .nav-link {
  transition: all 0.5s;
}
.navbar .navbar-nav .nav-link.active::after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #6822b8;
  color: transparent;
  width: 100%;
  float: left;
  margin: auto;
  content: '.';
  height: 0.2em;
}


.navbar .navbar-nav .nav-link:hover::after {
  width: 100%;
  float: left;
}
@media only screen and (min-width: 960px) {
  .navbar .navbar-nav .nav-link {
    padding: 1em 0.7em;
  }
  .navbar {
    padding: 0;
  }
  .navbar .navbar-brand {
    padding: 0 0.7em;
  }
}

div.card-body-image{
  position: relative;
  height: auto;
}
.border-primary{
  border: 0.1em solid #6822b8 !important;
}
.card-body{
  padding: 0%;
}
#clip{
  position: relative;
  top: 0;
  left: 50%;
  display: block;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 10px solid black;
}
div.card-body-image img::after{
  width: 0%;
  height: 0%;
}
div.col-md-4 .mr-10{
  margin-right: 0.7em;
}
div.col-md-10 .ml-10{
  margin-left: 0.7em;
}
p{
  display: inline-block;
}
p.specs{
  line-height: 0.7rem;
  border-radius: 0.9em;
}
div.specs-text{
 margin-top: -100px !important;
 padding: 0 1em !important;
}

.list-group-item{
  padding: 0.4rem 0;
  margin: 0.35em 0;
  background-color: inherit;
  color: white;
  border: none !important;
}
.putbg-image{
  background-image: url('./icons/profiler.png');
  background-attachment: fixed;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
background-size: 100% 100%;
}
.list-group-item i{
  margin-right: 0.7em;
}
.left-div{
  box-shadow: -.5px -.5px 0 .5px #0d6efd, inset -1px -1px 0 0 #0d6efd;
}
.mr-10{
  margin-right: 10px;
}
table{
  border: 1px solid #0d6efd;
  border-bottom: none;
}
thead{
  border-bottom: 1px solid #0d6efd !important;
}
tbody{
  border:none !important;
}
.bg-warning{
  background-color: #0ee9a8 !important;
}
.text-warning{
  color: #0ee9a8 !important;
}
.text-danger{
  color: #ff4747 !important;
}
.bg-danger{
  background-color: #ff4747 !important;
}

.vertical-line-icon {
  display: table;
  height: 50px;
}
.vl-warning{
  border-left: 3px solid #0ee9a8;
  height: 25px;
  margin-right: 20px;
  padding: 6px 0;  
}
.vl-danger {
  border-left: 3px solid #ff4747;
  height: 25px;
  margin-right: 20px;
  padding: 6px 0px;
}
.vertical-line-icon:after {
  content: '';
  display: table;
  margin: 0 auto;
  width: 4px;
  height: 100%;
  background-color: white;
  margin-right: 35px !important;
}
th{
  padding-left:30px !important;
  padding-right:0;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
td{
    padding: 15px 10px !important;
}
.margin-nav-auto{
    margin: auto;
}


@media (max-width: 1100px)
{
  #clip{
      width: 140px;
      height: 140px;
      top: -20px;
  }
  div.specs-text h5{
      margin-top: 40px;
   }
}

@media (max-width: 770px)
{
  #clip{
      width: 200px;
      height: 200px;
      border: 5px solid black;
  }
  .mr-10{
      margin-right: 0px;
  }
  div.col-md-4 .mr-10{
      margin-right: 0px;
  }
  .social-icons{
      justify-content: left;
      margin-left: 10px;
  }
  .social-analysis-icons{
      justify-content: center;
      margin-left: 10px;
  }
  .main-div{
      margin-bottom: 20px;
  }
  .h-analytics{
      margin-bottom: 20px;
  }
  .footer-icons{
      justify-content: center;
  }
  .footer-text{
      justify-content: center;
  }
  .right-nav{
      float: left;
      margin-right: 0;
      margin-left: 17px;
  }
  .margin-nav-auto{
      margin: auto 0 auto 10px;
  }
  .navbar .navbar-nav .nav-link:hover::after {
      width: 70px;
      margin: 0;
      margin-right: auto;
    }
    
  .navbar .navbar-nav .nav-link.active::after {
      width: 70px;
      margin: 0;
      margin-right: auto;
    }
}
@media (max-width:430) {
  #clip{
      width: 90px;
      height: 90px;
      top: -10px;
      border: 4px ;
  }
}
.text-bold{
  font-weight: bold;
}
.font-18{
  font-size: 18px;
}

.font-24{
  font-size: 24px;
}
.font-22{
  font-size: 22px;
}
.font-20{
  font-size: 20px;
}
.font-15{
  font-size: 15px;
}
a{
  color: #fff;
  text-decoration: none;
}
a:hover{
  color: #fff;
  text-decoration: none;
}
.btn:focus, .btn.focus{
  box-shadow: 0 transparent;
}
.c-footer{
    bottom: 0;
    width: 100%;
    height: auto;
}
.u-footer{
  position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
}
.navbar .navbar-nav .nav-link::after{
  background-color: transparent;
}
.profile-modal .modal-content{
background-color: #000 !important;
}
.profile-modal .ant-form-item-label > label{
color: #fff !important;
}
.profile-modal .ant-input{
  background: rgb(57, 61, 66);
  border: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  border-radius: 20px;
  }
.profile-modal .modal-header{
  border-bottom:0;
  }
`;
