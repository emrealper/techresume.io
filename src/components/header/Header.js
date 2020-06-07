import React, { Component } from 'react';
import './header.css';


class Header extends React.Component {






render(){




	return(
       
//     <header class="navbar navbar-default navbar-fixed-top" style={{marginBottom:"0"}} rel="noindex">
//     <div class="content">
   
//         <div class="header-title"><span class="name">A. Emre Alper</span><span class="position">Full Stack Developer | Software Architect</span></div>
//         {/* <div class="menu"><span class="underlined"><a href="/">Blog</a></span><span class="underlined"><a class="link-about" href="/about">About</a></span></div> */}
    
//             {/* <div id="navbar" class="navbar-collapse collapse">
         
//           <ul class="nav navbar-nav navbar-right">
//           <ul class="nav navbar-nav navbar-left" style={{marginTop:"20px"}}>
//             <li ><a href="/about">Summary</a></li>
//             <li ><a href="/resume">Skills</a></li>
//             <li ><a href="/blog">Highlights</a></li>
// 						<li ><a href="/blog">Employment</a></li>
// 						<li ><a href="/blog">Education</a></li>
//           </ul>
//           </ul>
//        </div> */}
//     </div>
// </header>

    <nav class="navbar navbar-default navbar-fixed-top" style={{marginBottom:"0"}} rel="noindex">
      <div class="container">
        <div class="navbar-header">
          {/* <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="fa fa-bars"></span>
          </button> */}
          <a class="navbar-brand" href="/"><span class="navbar-brand-box">A. Emre Alper</span></a>
        
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          {/* <ul class="nav navbar-nav navbar-left" style={{marginTop:"20px"}}>
            <li ><a href="/about">Summary</a></li>
            <li ><a href="/resume">Skills</a></li>
            <li ><a href="/blog">Highlights</a></li>
						<li ><a href="/blog">Employment</a></li>
						<li ><a href="/blog">Education</a></li>
          </ul> */}
          <ul class="nav navbar-nav navbar-right">
            <li id="contact-nav">
              <a href="javascript:showContactModal();" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Email"><span class="fa fa-envelope-o"></span></a>
              <a href="https://twitter.com/tim_schreiber" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Twitter"><span class="fa fa-twitter"></span></a>
              <a href="linkedin.com/in/emre-alper" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><span class="fa fa-linkedin"></span></a>
              <a href="http://stackoverflow.com/users/913261/tim-s" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Stack Overflow"><span class="fa fa-stack-overflow"></span></a>
              <a href="https://github.com/timschreiber" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Github"><span class="fa fa-github"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>




    

      
	);
}
};
  


export default Header;
