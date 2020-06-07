import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/resume/actions';


import { Link,Redirect } from 'react-router-dom';
import {  history } from '../../redux/store'; //new redux

import Aux from '../../hoc/_Aux/_Aux';
import {_firebase,facebookProvider,googleProvider,fireStoreProvider} from '../../base';
import SortableSkill from '../skills/SortableSkill';
import ContentEditable from 'react-contenteditable'
import clone from 'clone';
import  './resume.css' 
import Sticky from 'react-stickynode';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.contentEditableSummary = React.createRef();
    this.contentEditableHighLights = React.createRef();
    this.state = {
     
      forHtml:true,
      summary:"",
      skills:{}
    };
  }

componentDidMount()
{

  this.props.getBasicInfoFromDb("4Kn3Cbir0lWZOjhBWoMU");
  this.props.getCollectionsFromDb("4Kn3Cbir0lWZOjhBWoMU","Skills");
  

};


  componentWillMount() {
     
  
    
  }

  handleChangeSummary = (evt) => {
    

    let {baseInfo} = clone(this.props);
   baseInfo.Summary=evt.target.value;
   this.props.saveBasicInfoIntoDb("4Kn3Cbir0lWZOjhBWoMU",baseInfo,"update");
    
    // this.setState({html: evt.target.value});
  };

  handleChangeHighLights = (evt) => {
    debugger;
    let {baseInfo} = clone(this.props);
    baseInfo.Highlights=evt.target.value;
    this.props.saveBasicInfoIntoDb("4Kn3Cbir0lWZOjhBWoMU",baseInfo,"update");
  };

  render() {
    


var _summary=this.props.baseInfo.Summary;
var _highLights=this.props.baseInfo.Highlights;

var _skills=null;


_skills= this.props.Skills==null?null:this.props.Skills.map((skill,i) => {

     var _skillsItem=null;
    _skillsItem=skill==null?null:<SortableSkill skill={skill} {...this.props}/>
     
return(
   _skillsItem
   )
         
     });

    return (
     
      <Aux>
<React.Fragment>
 
<content>
    <main>
        <section class="main-area container">
            <section class="resume-body">
           

                <div class="page-header">
                <div class="clearfix">
                <h1 class="pull-left">A. EMRE ALPER</h1>
                <ul class="nav pull-left" style={{marginTop:"5px",marginLeft:"-8px"}}>
            
            <a class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Email"><span class="fa fa-envelope-o"></span>emrealper@gmail.com</a>
          <a  class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Gsm"><span class="fa fa-mobile"></span>+90 533 364 6479</a>
         {this.state.showSkype && <a class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Skype"><span class="fa fa-skype"></span>live:2941ffca7aaf17c7</a> }
          <a href="https://emre.techresume.io" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="WebPage"><span class="fa fa-globe"></span>emre.techresume.io</a>
          <a href="https://github.com/emrealper" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="Github"><span class="fa fa-github"></span>https://github.com/emrealper</a>
          <a href="https://bit.ly/2TL4w5m" class="contact-nav-item" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><span class="fa fa-linkedin"></span>https://bit.ly/2TL4w5m</a> 
          { this.state.forHtml && <a href="https://s3.eu-central-1.amazonaws.com/emre.techresume.io/emre_alper_resume.pdf" target="_blank" class="contact-nav-item no-print" data-toggle="tooltip" data-placement="bottom" title="Pdf"><span class="fa fa-file-pdf-o"></span>Download as Pdf</a> }
                  
     
    </ul>
            
          
        </div>
  
   
         
    </div>
<br/>
    <div id="res-summary" class="res-section">
      <h3>Summary</h3>
      <ContentEditable
              innerRef={this.contentEditableSummary}
              html={_summary} // innerHTML of the editable div
              disabled={true}       // use true to disable editing
              onChange={this.handleChangeSummary} // handle innerHTML change
              tagName='Summary' // Use a custom HTML tag (uses a div by default)
            />
      {/* <div className="summary_content" dangerouslySetInnerHTML={{ __html: _summary }}></div> */}
    </div>

        <div id="res-skills" class="res-section">
      <h3>Tech Skills</h3>
      <dl class="dl-horizontal">
  

   {_skills}
      
      </dl>
    </div>
    
    <div id="res-highlights" class="res-section">


      <h3>Highlights</h3>
      <ContentEditable
             spellcheck="false"
              innerRef={this.contentEditableHighLights}
              html={_highLights} // innerHTML of the editable div
              disabled={true}       // use true to disable editing
              onChange={this.handleChangeHighLights} // handle innerHTML change
              tagName='HighLights' // Use a custom HTML tag (uses a div by default)
            />
      {/* <div className="summary_content" dangerouslySetInnerHTML={{ __html: _highLights }}></div> */}
 
    </div>
    <div id="res-emp" class="res-section">
      <h3>Work Experience</h3>



      <div id="res-emp-nic" class="employer">
        <div class="clearfix">
          <h4 class="pull-left">Arcelik Global</h4>
          <h4 class="pull-right">Oct 2019 to Present</h4>
        </div>
        <div>
        <strong>Senior Specialist - Software Development</strong>
        </div>
        <p class="description">
        Arcelik is the third largest home appliances company of EMEA region. With marketing & sales organizations in 33 countries and 30.000 employees, Arçelik provides goods and services in 145 countries.
         </p>
    
      
         <div className="project-section">
        

          <ul>
            <li>Leading and taking part in full software development lifecycle and outsourcing activities for customer care software solutions.</li>
            <li>Propose, define and apply IT services and solutions in cooperation with business owners and business analysts.</li>
            <li>Maintain current customer care applications to ensure high performance and high availability.</li>
            <li>Discovering new technologies and implement effective solutions continuously.</li>
            <li>Working on maintenance, bug fixing, testing, implementing new end-user requests and improving application performance.</li>
            <li>Managing in-house and outsource software solution projects.</li>
          </ul>
          </div>










      </div>




      <div id="res-emp-nic" class="employer">
        <div class="clearfix">
          <h4 class="pull-left">RateChannels</h4>
          <h4 class="pull-right">Jul 2017 to Aug 2019</h4>
        </div>
        <div>
        <strong>Senior Software Engineer (Co-Founder)</strong>
        </div>
        <p class="description">
        RateChannels is a travel technology start-up (over 2k happy customer) focusing on luxury travel business to B2B and B2C operations to the Maldives. 
     RateChannels has direct contracts over 60 luxury resorts and specializes in 1000+ handpicked exclusive villas across the Maldives.
         </p>
    
      
         <div className="project-section">
          <div class="clearfix">
          <div class="pull-left"><a href="https://maldivesclub.com" target="_blank">MaldivesClub.com</a></div>
          <div class="pull-right">Lead Developer/Architect &mdash; May 2018 to Aug 2019</div>
        </div>

          <div>
            <span class="badge alert-info">ReactJS</span>
            <span class="badge alert-info">Redux</span>
            <span class="badge alert-info">Redux-saga</span>
           {this.state.forHtml && <span class="badge alert-info">React-router</span>}
            <span class="badge alert-info">ASP.NET Core MVC</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">Elasticsearch</span>
            <span class="badge alert-info">Redis</span>
            <span class="badge alert-info">Microservices</span>
            <span class="badge alert-info">AWS EC2</span>
            <span class="badge alert-info">AWS Lambda</span>
           {this.state.forHtml && <span class="badge alert-info">CloudFront</span>}
           {this.state.forHtml &&  <span class="badge alert-info">Route53</span>}
          </div>
          <ul>
            <li>Designed and implemented UI and UX architecture of the first ever OTA product which provides luxury villa based search experience.</li>
            <li>Built multilingual front-end architecture that helped to create a market-based SEO strategy and increased customer engagement.</li>
            <li>Refactored and migrated core infrastructure to .NET Core that significantly reduced server usage and uptime.</li>
            <li>Reduced server bills by 60% by deploying ASP.NET Core MVC application to AWS Lambda.</li>
            <li>Improved the performance of real-time pricing and reduced the search response time by more than 70% by using distributed cache.</li>
          </ul>
          </div>



        <div className="project-section">
          <div class="clearfix">
          <div class="pull-left">Core Infrastructure and B2B Software</div>
          <div class="pull-right">Lead Developer/Architect &mdash; Jul 2017 to Aug 2019</div>
        </div>

          <div>
            <span class="badge alert-info">C#</span>
            <span class="badge alert-info">ASP.NET MVC Web API</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">Autofac</span>
            <span class="badge alert-info">SignalR</span>
            <span class="badge alert-info">ExtJS 4.2</span>
            <span class="badge alert-info">Angular 2</span>
            <span class="badge alert-info">Elasticsearch</span>
            <span class="badge alert-info">AWS EC2</span>
            {this.state.forHtml && <span class="badge alert-info">Auto Scaling</span>}
            {this.state.forHtml &&<span class="badge alert-info">AWS SES</span>}
            <span class="badge alert-info">SVN</span>
          </div>
          <ul>
            <li>Performed market analysis, project management, software architecture, and full stack developer duties for a luxury travel business workflow.</li>
            <li>Architected the application and reduced the server-side development efforts by 50% by developing code generator that creates Enterprise Architecture Code base.</li>
            <li>Decreased quoting time from hours to minutes and eliminating wrong pricing by developing "seasonal, special offer basis villa pricing algorithm" and implementing Elasticsearch based high-performance search and booking engine. </li>
            
      
           
          </ul>
          </div>






      </div>

            <div id="res-emp-nic" class="employer">
        <div class="clearfix">
          <h4 class="pull-left">Shamir Optical Industry, Ltd</h4>
          <h4 class="pull-right">Oct 2018 to March 2019</h4>
        </div>
        <div><strong>Project-Based Full Stack Developer / Architect</strong></div>
        <p class="description">
        Shamir Optical Industry Ltd. is ranked among the world’s top ten progressive lens manufacturers. 
        Today Shamir operates two manufacturing facilities for molds and semi-finished lenses in Israel 
        and operates nine laboratories throughout the world with a total workforce of some 1,800. </p>
        
         <div class="clearfix">
          <div class="pull-left">B2B Online Sales Portal</div>
         </div>
         <div>
            <span class="badge alert-info">ASP.NET MVC Web API</span>
            <span class="badge alert-info">ReactJS</span>
            <span class="badge alert-info">Redux</span>
            <span class="badge alert-info">Redux-saga</span>
            <span class="badge alert-info">styled-components</span>
            <span class="badge alert-info">React-router</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">Autofac</span>
            <span class="badge alert-info">OWIN</span>
            <span class="badge alert-info">Windows Server 2008</span>
            <span class="badge alert-info">IIS</span>
          </div>
        <ul>
          <li>Analyzed business processes, gathered requirements, designed UI and UX architecture, wrote specifications and user stories.</li>
          <li>Maximized developer productivity and unit test coverage by applying Patterns of Enterprise Application Architecture, including Domain Driven Design, Object-Relational Mapping (ORM), Repository and Unit of Work patterns, Inversion of Control (IoC), separation of concerns.</li>
          <li>Improved customer experience by developing API based, "mobile first" e-commerce and online ordering UI using ReactJS, Redux-saga, and styled-components, including virtual pos integrations for online payments.</li>
       
        </ul>
      </div>



    
      
      <div id="res-emp-stg" class="employer">
        <div class="clearfix">
          <h4 class="pull-left">Ante Grup Bilisim</h4>
          <h4 class="pull-right">March 2013 to Jul 2017</h4>
        </div>
        <div><strong>Software Development Manager / Architect </strong></div>
        <ul>
        <li>Experienced in all life cycle of a software development company, including pre-sales and sales meetings, requirement analysis, budgeting, recruiting and leading the team, choosing the tech stacks and core development.</li>
        <li>Reduced development efforts and time more than 50% by developing POCO based code generator that creates back-end and front-end codes by applying SOLID principles and enterprise application architecture.</li>
        <li>Performed software development consulting for various levels of 20+ clients that include gsm operators, technology service providers, public and military institutions, small medium enterprises and start-ups. Some of them listed below.</li>
        </ul>
        <div class="clients">
        <div className="single_client_with_projects">
          <div><u>Turkcell Iletisim Hizmetleri A.S</u></div>
          <p class="description">
          Turkcell is a converged telecommunication and technology services provider, founded and headquartered in Turkey. 
          It serves its customers with voice, data, TV and value-added consumer and enterprise services on mobile and fixed networks. 
          Mobile communication in Turkey began when Turkcell commenced operations in February 1994.</p>
        
        <div className="project-section">
          <div class="clearfix">
          <div class="pull-left">Free Cooling Management System</div>
          <div class="pull-right">Senior Developer/Architect &mdash; Apr 2015 to Jun 2017</div>
        </div>

          <div>
            <span class="badge alert-info">IoT</span>
           <span class="badge alert-info">Modbus TCP/IP</span>
            <span class="badge alert-info">MS SQL Server</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">Elasticsearch</span>
            <span class="badge alert-info">ASP.NET MVC Web API</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">Autofac</span>
            <span class="badge alert-info">NLog</span>
            <span class="badge alert-info">ExtJS 4.2</span>
            <span class="badge alert-info">LDAP</span>
            <span class="badge alert-info">SignalR</span>
          <span class="badge alert-info">RabbitMQ</span>
          <span class="badge alert-info">MassTransit</span>
            <span class="badge alert-info">IBM Maximo</span>
            <span class="badge alert-info">HP TeMIP</span>
          </div>
          <ul>
            <li>Participated in architectural design and development efforts of the distributed system which collects high frequency (1 min) climate data from free-cooling devices running on 40.000 gsm base stations.</li>
            <li>Designed and developed key parts of a large enterprise IoT management web application which is for monitoring data, configuring the alarm threshold parameters depending on geographical locations and climate conditions and reporting. </li>
            <li>Redesigned order queue implementation (bypassing the database polling completely) with RabbitMQ and MassTransit for device configuration queue management that guarantees deliverability.</li>
            <li>Increased search and reporting performance of device climate logs by storing real-time data on Elasticsearch as a secondary datastore.</li>
        
          </ul>
          </div>



        <div className="project-section">
          <div class="clearfix">
          <div class="pull-left">MARACAS</div>
          <div class="pull-right">Senior Developer &mdash; Jun 2013 to Oct 2014</div>
        </div>

          <div>
          <span class="badge alert-info">C#</span>
            <span class="badge alert-info">ASP.NET MVC</span>
           
            <span class="badge alert-info">WCF</span>
            <span class="badge alert-info">AngularJS</span>
            <span class="badge alert-info">jQuery</span>
            <span class="badge alert-info">Devexpress</span>
            <span class="badge alert-info">MSSQL</span>
            <span class="badge alert-info">Oracle(10g)</span>
            <span class="badge alert-info">Sybase</span>
            <span class="badge alert-info">TFS</span>
          </div>
          <ul>
            <li>Developed and implemented a number of modules of the web infrastructure which is for Turkcell's regional solution partners that can manage all processes from a single platform and integrates with other internal applications of Turkcell.</li>
         
          </ul>
          </div>

          </div>





      <div className="single_client_with_projects">
          <div><u>Turkish Armed Forces Veterinary Corps</u></div>
          <p class="description">
          Identification of measures to be taken from the procurement to consumption of food and water for the healthy diet of Turkish Armed Forced personnel, related physical control and laboratory analysis, and hygiene activities required by preventive medicine is carried out.
         </p>
        
        <div className="project-section">
          <div class="clearfix">
          <div class="pull-left">Laboratory Information Management System</div>
          <div class="pull-right">Lead Developer / Architect &mdash; May 2013 to Feb 2014</div>
        </div>

          <div>
            <span class="badge alert-info">C#</span>
            <span class="badge alert-info">ASP.NET MVC</span>
            <span class="badge alert-info">ExtJS 4.2</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">LINQ</span>
            <span class="badge alert-info">Autofac</span>
            <span class="badge alert-info">AutoMapper</span>
            <span class="badge alert-info">Log4net</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">RDLC</span>
            <span class="badge alert-info">Node.js</span>
            <span class="badge alert-info">SVN</span>
          </div>
          <ul>
            <li>Performed business analysis, software architecture, and lead developer duties for a web application which helps to automate quality control processes of Turkish Armed Forced food and beverage Labs.</li>
            <li>Reduced the development efforts and server usage by migrating from RDLC to HTML to PDF creation by using Node.js for real-time reporting.</li>
            <li>Created a continuous integration environment and published the latest versions to an internal web server to better engage the client in the development and testing process.</li>
         
          </ul>
          </div>



   

          </div>












          <div><u>TeklifDosyam.com</u></div>
          <p class="description">TeklifDosyam.com is a SaaS-based CRM & ERP system especially developed for small medium enterprises which allows them to manage its Customer management (CRM), Inventory, Quotes, Purchase orders, Sales orders, Custom workflow, Invoices, Picklist, Receive list and Product management.</p>
          <div>Architect / Product Owner &mdash; Jan 2014 to July 2017</div>
          <div>
          <span class="badge alert-info">C#</span>
            <span class="badge alert-info">ASP.NET MVC</span>
            <span class="badge alert-info">ExtJS 4.2</span>
            <span class="badge alert-info">jQuery</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">LINQ</span>
            <span class="badge alert-info">Autofac</span>
            <span class="badge alert-info">AutoMapper</span>
            <span class="badge alert-info">Log4net</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">SVN</span>
           
            <span class="badge alert-info">EC2</span>
            <span class="badge alert-info">S3</span>

          </div>
          <ul>
            <li>Developed core software architecture of service-oriented cloud base CRM & ERP solution with UI and Back-end components.</li>
            <li>Led a major architecture effort focusing on separation of concerns, design patterns (primarily Repository, Unit of Work, and Inversion of Control), and proper layering/solution structure; which resulted in better performance, improved testability, increased stability, and easier development and maintenance.</li>
         
          </ul>


  <React.Fragment>
          <div><u>NumuneKabul.com</u></div>
          <p className="description">NumuneKabul.com is a SaaS-based laboratory management software built exclusively on cloud-based technology that requires no investment in IT resources or manpower.</p>
          <div>Architect / Product Owner &mdash; Feb 2014 to Nov 2014</div>
          <div>
          <span class="badge alert-info">C#</span>
            <span class="badge alert-info">ASP.NET MVC</span>
            <span class="badge alert-info">ExtJS 4.2</span>
            <span class="badge alert-info">jQuery</span>
            <span class="badge alert-info">Entity Framework</span>
            <span class="badge alert-info">LINQ</span>
            <span class="badge alert-info">Autofac</span>
            <span class="badge alert-info">AutoMapper</span>
            <span class="badge alert-info">Log4net</span>
            <span class="badge alert-info">MySQL</span>
            <span class="badge alert-info">SVN</span>
          
            <span class="badge alert-info">EC2</span>
            <span class="badge alert-info">S3</span>
      
          </div>
          <ul>
            <li>Focused on product strategy of industry-first cloud base LIMS solution for Turkey and roadmap planning.</li>
            <li>Organized business meetings with quality control labs and performed requirement analysis.</li>
      
          </ul>
          </React.Fragment>



         

              <div className="single_client_with_projects">
          <div><u>Turkish State Railways</u></div>
          <p class="description">
          The State Railways of the Republic of Turkey, 
          abbreviated as TCDD, is a government-owned national railway company responsible with the ownership and maintenance of railway infrastructure in Turkey.
          </p>
        
          <div className="project-section">
          <div class="clearfix">
          <div class="pull-left">Official Mobile App </div>
          <div class="pull-right">Back-end Developer &mdash; July 2013 to Jan 2014</div>
        </div>


          <div>
          <span class="badge alert-info">ASP.NET MVC </span>
            <span class="badge alert-info">ADO.NET</span>
            <span class="badge alert-info">Web Service</span>
            <span class="badge alert-info">RESTful</span>
            <span class="badge alert-info">Oracle Db</span>
            <span class="badge alert-info">SQL Server 2008 R2</span>
           
            
          </div>
          <ul>
            <li>Developed and maintained RESTful Web Service Architecture of Turkish State Railways reservation app, including
integration with existing system and databases</li>

         
          </ul>
          </div>





        <div className="project-section">
          <div class="clearfix">
          <div class="pull-left">Conversational Chatbot and Social Media Automation Tool</div>
          <div class="pull-right">Back-end Developer &mdash; May 2013 to Dec 2013</div>
        </div>

          <div>
          <span class="badge alert-info">Twitter API</span>
            <span class="badge alert-info">Facebook Graph API</span>
            <span class="badge alert-info">C#</span>
            <span class="badge alert-info">Windows Forms</span>
            <span class="badge alert-info">ASP.NET Web Forms</span>
            <span class="badge alert-info">jQuery</span>
            <span class="badge alert-info">SignalR</span>
            <span class="badge alert-info">Bootstrap</span>
            <span class="badge alert-info">Chatbot</span>
            
          </div>
          <ul>
            <li>Built customer support chatbot by applying sentiment analysis of interactions on official Facebook and Twitter Accounts and public posts.</li>
 <li>Designed and developed desktop and web applications to configure, track and manage behaviors of assistant chatbot.</li>
         
          </ul>
          </div>

          </div>

        
 

          
    
      
        </div>
      </div>
      
      <div id="res-emp-mccann" class="employer">
        <div class="clearfix">
          <h4 class="pull-left">NTM Elektrik Elektronik A.S</h4>
          <h4 class="pull-right">Feb 2011 to March 2013</h4>
      </div>
<div><strong>Software Engineer / Developer</strong></div>
<p class="description">
          In 2000, NTM starting with being in service for issues such as infrastructure, 
          maintenance, and operation of the GSM sector; has serviced as area solution partnerships in quality and customer
           oriented to its customers.</p>
        <div>
          <span class="badge alert-info">C#</span>
          <span class="badge alert-info">ADO.NET</span>
          <span class="badge alert-info">SQL Server 2005</span>
          <span class="badge alert-info">SSRS</span>
          <span class="badge alert-info">PL/SQL</span>
        <span class="badge alert-info">Stored-Procedures</span>
          <span class="badge alert-info">DevExpress WinForms</span>
          <span class="badge alert-info">jQuery</span>
          <span class="badge alert-info">WebSockets</span>
          <span class="badge alert-info">SignalR</span>
          <span class="badge alert-info">RabbitMQ</span>
          <span class="badge alert-info">MassTransit</span>
          <span class="badge alert-info">Google Maps API</span>
         <span class="badge alert-info">TFS</span>
        </div>
        <ul>
        <li>Coded complex SQL queries and stored procedures and developed workflows for in-house ERP and BI software</li>
        <li>Improved performance and reliability for real-time monitoring of fault alarms producing by Gsm Base Stations by using RabbitMQ for message broker implementation.</li>
       <li>Increased client and server efficiency by developing WebSockets implementation with SignalR for transmitting categorized Gsm Base Station alarms to the web and mobile clients asynchronously.</li>
     <li>Designed and developed vehicle routing optimization algorithm based on live GPS coordinates and work-orders and built a map-based web site on it.</li>
          <li>Reduced fleet running cost by 30% and increased traceability of field operation which runs with more than 100 vehicles and human resources.</li>
        </ul>
      </div>
      

      

      
   
      

      
  

    </div>
    <div id="res-community" class="res-section">
      <h3>Professional Community</h3>
      <dl>
       
        {/* <dt>GitHub</dt>
        <dd><a href="https://github.com/emrealper" target="_blank">https://github.com/emrealper</a></dd> */}
      
        <dd>I am the contributor of Serverless Turkey, Software Craftsmanship Turkey, AWS Training Group Turkey, iyzico Engineering Meetup</dd>
      </dl>
    </div>

    <div id="res-edu" class="res-section">
      <h3>Education</h3>
      <dl>
        <dt>Eastern Mediterranean University – Famagusta, TRNC</dt>
        <dd>B.Sc. – Computer Engineering (ABET Accredited) (2005 - 2011)</dd>
      
   </dl>
    </div>

       <div id="res-edu" class="res-section">
      <h3>Awards</h3>
      <dl>
        <dt>Awarded in recognition of an outstanding Graduation Project Entitled</dt>
        <dd>Design and Implementation of a real-time social media sentimental analysis tool and build Job Posting Website using classified Twitter Posts as a Source.</dd>
      
   </dl>
    </div>
               
            </section>
        </section>

        {/* <section class="right-side-bar">
        
        <div className="side-bar">
        <Sticky enabled={true} top={90}>
        <div class="section">
        
    <div class="section-title">Tech Stack Highlighter</div>
    <div class="content"><a href="/tags/net-core/">.NET Core</a><a href="/tags/autofac/">Autofac</a><a href="/tags/blog-platforms/">Blog Platforms</a><a href="/tags/dependency-injection/">Dependency Injection</a><a href="/tags/gatsby-js/">GatsbyJS</a><a href="/tags/react-js/">ReactJS</a></div>
</div>
  </Sticky>
</div>
  
        </section> */}
  
    </main>
</content>
       
<footer rel="noindex">
  <div class="container">

  </div>
</footer>

</React.Fragment>





</Aux>
     
    );
  }
}

// function mapStateToProps(state) {
// 	// return { user: state.user }
// 	return { ...state.App}
//   }

export default connect(
  state => ({
    ...state.Resume,
  }),
  actions
)(MainPage);


