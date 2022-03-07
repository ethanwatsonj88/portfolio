import Head from 'next/head'
import Navbar from '../components/navbar';
import Title from '../components/title';

export default function BCH() {
  return (
    <div className="container">
        <Head>
          <title>BCH</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ntt5nzc.css"/>

        </Head>

        <main>

          <p className="disclaimer"><em><span style={{color: '#6EB7F5'}}>*</span>inspired by digital brutalism.</em></p>

          <Navbar />

          <div className="job">
            <h2>Redesign a form and user profile web application while bridging new hospital styles 
              and the existing mobile app.</h2>

            <a href="/bch/1/second-run_never-coded-but-can.png">
            <img src="/bch/1/second-run_never-coded-but-can.png" className="job-img-header" /></a>

            <p>I redesigned components, typography, and layout for a web application that 
              had about 14 form pages and a user profile (login, logout, account) flow. 
              I constantly thought about implementation workload, responsive design, accessibility, 
              and identity.</p>

            <h2>Challenges + Solutions: Redesigning unique form pages</h2>

            <div className="bch-glide job-img-list">
              <a href="/bch/1/first-run_i-coded.png">
              <img src="/bch/1/first-run_i-coded.png" className="job-img-item sub-page" /></a>
            </div>

            <ul className='case-study-sub'>
              <span className="light-cyan">Single Column Form UX Research</span>
            </ul>

            <p className="job-desc">
              One implementation I presented to my team and implemented was single column forms and adjusting typography for input fields. 
              The original form was two column on desktop, and switched to one column at a breakpoint. 
              I read multiple articles about UX practices, and a common theme I saw was that readers overwhelmingly have trouble completing forms that are not 
              strictly vertical or strictly horizontal. I presented this to my team, and clearly communicated the advantages of staying single column, including accessibility and 
              more form completions with less errors.
            </p>

            <div className="bch-glide job-img-list">
              <a href="/bch/1/second-run_never-coded-but-can.png">
              <img src="/bch/1/second-run_never-coded-but-can.png" className="job-img-item sub-page" /></a>
            </div>

            <div className="slide-spacing"></div>

            <div className="bch-glide job-img-list">
              <a href="/bch/1/input-research.png">
              <img src="/bch/1/input-research.png" className="job-img-item" /></a>
            </div>

            <ul className='case-study-sub'>
              <span className="light-cyan">Input Field UX Research + Type Hierarchy</span>
            </ul>

            <p>
              I also decided to adjust the hierarchy of the page, especially input fields. I chose to keep 
              input field text top aligned, or above the input field, because this had the quickest completion 
              time and UX best practices suggest this to be most readable. There weren't many inputs, so vertical 
              spacing wasn't a major concern, either.
            </p>
            <p>
              I decided to decrease the weight of input labels, and highlight key information while making elements like input borders less visible to help guide the reader through the form.
            </p>

            <div className="bch-glide job-img-list">
              <a href="/bch/1/input-fields.png">
              <img src="/bch/1/input-fields.png" className="job-img-item sub-page img-block" /></a>
            </div>

            <div className="slide-spacing"></div>

            <div className="bch-glide job-img-list">
              <a href="/bch/1/old-sidebar.png">
              <img src="/bch/1/old-sidebar.png" className="job-img-item" /></a>
            </div>

            <ul className='case-study-sub'>
              <span className="light-cyan">Complex Component Design Decisions</span>
            </ul>

            <p>
              I redesigned the side status bar, considering value, hierarchy, and developer workload. The sidebar was not the main focus of the pages, so I got rid of the saturated background to signify that. 
              On top of that, I adjusted the text hierarchy to match the overall web application, and I placed it at the bottom of the page in mobile view to focus on what the user needed to do, which was completing forms.
            {/* I created the front-end architecture, coding, & visual redesign of a 
            public facing react application. My team helped every week, and I 
            had to keep in mind the mobile version of the web app I was 
            developing and designing. I improved and tested multiple SCSS 
            structures, React components, and Angular templates. I designed and 
            prototyped mockups in Figma for two teams and presented to clients. */}
            </p>

            <div className="bch-glide job-img-list">
              <a href="/bch/1/new-sidebar.png">
              <img src="/bch/1/new-sidebar.png" className="job-img-item  sub-page" /></a>
            </div>

            <div className="slide-spacing"></div>

            <div className="bch-glide job-img-list">
              <a href="/bch/some-example-prototypes/attempt-to-typography-hierarchy-improvements.png">
              <img src="/bch/some-example-prototypes/attempt-to-typography-hierarchy-improvements.png" className="job-img-item" /></a>
            </div>

            <ul className='case-study-sub'>
              <span className="light-cyan">Brand Identity and User Experience</span>
            </ul>

            <p>
              The Boston Children's Hospital public facing website's styling and identity was being updated during the beginning of my project. I had to consider 
              keeping the identity of the web application I was in charge of creating looked both secure and in line with both styling of the main website and the app that accompanied the web application I was working on. 
              I achieved this by using some of the new brand elements such as the new header and footer, and I also made the sidebar match the existing side bar menu. Both sidebars served different purposes, so I had to keep that in mind. 
              I kept the flow similar to the mobile app, so that users could seamlessly use either the web application or iphone/android app to check their profile and continue their process.
            {/* I created the front-end architecture, coding, & visual redesign of a 
            public facing react application. My team helped every week, and I 
            had to keep in mind the mobile version of the web app I was 
            developing and designing. I improved and tested multiple SCSS 
            structures, React components, and Angular templates. I designed and 
            prototyped mockups in Figma for two teams and presented to clients. */}
            </p>

            <div className="bch-glide job-img-list">
              <a href="/bch/some-example-prototypes/hospital-styling.png">
              <img src="/bch/some-example-prototypes/hospital-styling.png" className="job-img-item" /></a>
            </div>

            <div className="slide-spacing"></div>

            <ul className='case-study-sub'>
              <span className="light-cyan">Next Steps</span>
            </ul>

            <p>
              In retrospect, I would have liked to explore A/B testing on the CTA buttons. We did not have a content specialist, just the existing content from before. 
              I think it would be worth the effort to research more about CTAs to increase completion and the overall user process in our web application.
            </p>

          </div>

        </main>
        
      </div>
  )
}