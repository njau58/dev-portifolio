import React,{useState, useEffect} from "react";
import Header from  '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const privacyPolicy = () => {
  const [colorNavChange, setColorNavchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorNavchange(true);
    } else {
      setColorNavchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (<>
    <Header
      colorNavChange={true}
    navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
    linkActiveColor={`${
      colorNavChange ? "text-sky-800" : "text-amber-500"
    }`}
    linkHoverColor={`${colorNavChange ? "text-amber-500" : "text-slate-400"}`}
    linkBaseColor={`${
      colorNavChange ? "text-slate-600" : "text-slate-900"
    }`}
    logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-700"}`}
    navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
    menuIconColor={`${
      colorNavChange ? "text-slate-600" : "text-slate-600"
    }`}
    logoAfterColor="text-slate-100"
  ></Header>
    <section className="md:mx-24 md:mt-44 mt-32  ">
      <div className="flex flex-col justify-center items-center rounded-lg shadow-2xl pb-24 mb-32">
        <div className=" flex text-5xl rounded-t-lg font-light md:py-28  py-16 text-white items-center justify-center w-full h-12 bg-theme-dark-blue">
          <p>Privacy Policy</p>
        </div>

        <div className=" flex mt-9 mx-4 md:mx-24 flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl text-slate-900">Introduction</h2>
            <p className="text-base font-light text-slate-700">
              {" "}
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
              <br /> <br />
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.{" "}
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl text-slate-900">
              Interpretation and Definitions
            </h2>
            <h2 className="text-2xl text-sky-600">Interpretation</h2>
            <p className="text-base font-light text-slate-700">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h2 className="text-2xl text-sky-600">Definitions</h2>
            <p className="text-base font-light text-slate-700">
              For the purposes of this Privacy Policy:
            </p>
            <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
              <li>
                {" "}
                <span className=" font-semibold"> Account</span> means a unique
                account created for You to access our Service or parts of our
                Service.
              </li>
              <li>
                <span className=" font-semibold"> Company</span> (referred to as
                either "the Company", "We", "Us" or "Our" in this Agreement)
                refers to SoftLeaf applications.
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Cookies</span> are small files
                that are placed on Your computer, mobile device or any other
                device by a website, containing the details of Your browsing
                history on that website among its many uses.
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Country</span> refers to:
                Kenya
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Device</span> means any device
                that can access the Service such as a computer, a cellphone or a
                digital tablet.
              </li>{" "}
              <li>
                {" "}
                <span className=" font-semibold"> Personal Data</span> is any
                information that relates to an identified or identifiable
                individual.
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Service</span> refers to the
                Website.
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Service Provider</span> means
                any natural or legal person who processes the data on behalf of
                the Company. It refers to third-party companies or individuals
                employed by the Company to facilitate the Service, to provide
                the Service on behalf of the Company, to perform services
                related to the Service or to assist the Company in analyzing how
                the Service is used.
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Usage Data</span> refers to
                data collected automatically, either generated by the use of the
                Service or from the Service infrastructure itself (for example,
                the duration of a page visit).
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> Website</span> refers to
                SoftLeaf applications, accessible from &nbsp;
                <a
                  className="text-blue-600"
                  href="https://softleafapplications.com"
                >
                  https://softleafapplications.com
                </a>
              </li>
              <li>
                {" "}
                <span className=" font-semibold"> You</span> means the
                individual accessing or using the Service, or the company, or
                other legal entity on behalf of which such individual is
                accessing or using the Service, as applicable.
              </li>
            </ul>
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl text-slate-900">
                Collecting and Using Your Personal Data
              </h2>
              <h2 className="text-2xl text-sky-600">Types of Data Collected</h2>
              <h2 className="text-slate-900 font-semibold">Personal Data</h2>
              <p className="text-base font-light text-slate-700">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
                <li> Email address</li>
                <li> Your name(s)</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>
              <h2 className="text-slate-900 font-semibold">Usage Data</h2>
              <p className="text-base font-light text-slate-700">
                Usage Data is collected automatically when using the Service.
                <br />
                <br />
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data. <br />
                <br /> When You access the Service by or through a mobile
                device, We may collect certain information automatically,
                including, but not limited to, the type of mobile device You
                use, Your mobile device unique ID, the IP address of Your mobile
                device, Your mobile operating system, the type of mobile
                Internet browser You use, unique device identifiers and other
                diagnostic data. We may also collect information that Your
                browser sends whenever You visit our Service or when You access
                the Service by or through a mobile device.
              </p>
              <h2 className="text-slate-900 font-semibold">
                Tracking applications and Cookies
              </h2>
              <p className="text-base font-light text-slate-700">
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. The
                technologies We use may include:
              </p>
              <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
                <li>
                  {" "}
                  <span className=" font-semibold">
                    {" "}
                    Cookies or Browser Cookies{" "}
                  </span>{" "}
                  - A cookie is a small file placed on Your Device. You can
                  instruct Your browser to refuse all Cookies or to indicate
                  when a Cookie is being sent. However, if You do not accept
                  Cookies, You may not be able to use some parts of our Service.
                  Unless you have adjusted Your browser setting so that it will
                  refuse Cookies, our Service may use Cookies.
                </li>
                <li>
                  {" "}
                  <span className=" font-semibold"> Web Beacons </span> -
                  Certain sections of our Service and our emails may contain
                  small electronic files known as web beacons (also referred to
                  as clear gifs, pixel tags, and single-pixel gifs) that permit
                  the Company, for example, to count users who have visited
                  those pages or opened an email and for other related website
                  statistics (for example, recording the popularity of a certain
                  section and verifying system and server integrity).
                </li>
              </ul>
              <p className="text-base font-light text-slate-700">
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on Your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close Your web browser. Learn more about cookies:{" "}
                <a
                  className="text-blue-600"
                  href="https://www.privacypolicies.com/blog/cookies/"
                >
                  What Are Cookies?
                </a>
              </p>
              <p className="text-base font-light text-slate-700">
                We use both Session and Persistent Cookies for the purposes set
                out below:
              </p>
              <ul className="list-disc text-base font-semibold text-slate-700 ml-12 space-y-4 ">
                <li>Necessary / Essential Cookies</li>
                <p className="text-base font-light text-slate-700">
                  Type: Session Cookies
                </p>
                <p className="text-base font-light text-slate-700">
                  Administered by: Us
                </p>
                <p className="text-base font-light text-slate-700">
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </p>
                <li>Functionality Cookies</li>
                <p className="text-base font-light text-slate-700">
                  Type: Persistent Cookies
                </p>
                <p className="text-base font-light text-slate-700">
                  Administered by: Us
                </p>
                <p className="text-base font-light text-slate-700">
                  Purpose: We use these Cookies to track users across our
                  Services. The Cookies have various uses, including, but not
                  limited to, determine number of page views, number of video
                  views, topics of interest, recent page visits, number of times
                  a visitor has visited a particular page, visitor interaction
                  with the Website at various points, how much time visitors
                  spend in the Website.
                </p>
                <li>Cookies Policy / Notice Acceptance Cookies</li>
                <p className="text-base font-light text-slate-700">
                  Type: Persistent Cookies
                </p>
                <p className="text-base font-light text-slate-700">
                  Administered by: Us
                </p>
                <p className="text-base font-light text-slate-700">
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.
                </p>
              </ul>
              <p className="text-base font-light text-slate-700">
                {" "}
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
              </p>
              <h2 className="text-2xl text-sky-600">
                Use of Your Personal Data
              </h2>
              <p className="text-base font-light text-slate-700">
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </p>
              <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
                <li>
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.
                </li>
                <li>
                  To manage Your Account: to manage Your registration as a user
                  of the Service. The Personal Data You provide can give You
                  access to different functionalities of the Service that are
                  available to You as a registered user.
                </li>
                <li>
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service.
                </li>
                <li>
                  To contact You: To contact You by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication, such as
                  a mobile application's push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.
                </li>
                <li>
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.
                </li>
                <li>
                  To manage Your requests: To attend and manage Your requests to
                  Us.
                </li>
                <li>
                  For business transfers: We may use Your information to
                  evaluate or conduct a merger, divestiture, restructuring,
                  reorganization, dissolution, or other sale or transfer of some
                  or all of Our assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar proceeding, in which
                  Personal Data held by Us about our Service users is among the
                  assets transferred.
                </li>
                <li>
                  For other purposes: We may use Your information for other
                  purposes, such as data analysis, identifying usage trends,
                  determining the effectiveness of our promotional campaigns and
                  to evaluate and improve our Service, products, services,
                  marketing and your experience.
                </li>
                <li>
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service.
                </li>
                <li>
                  To contact You: To contact You by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication, such as
                  a mobile application's push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.
                </li>
                <li>
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.
                </li>
                <li>
                  To manage Your requests: To attend and manage Your requests to
                  Us.
                </li>
                <li>
                  For business transfers: We may use Your information to
                  evaluate or conduct a merger, divestiture, restructuring,
                  reorganization, dissolution, or other sale or transfer of some
                  or all of Our assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar proceeding, in which
                  Personal Data held by Us about our Service users is among the
                  assets transferred.
                </li>
                <li>
                  For other purposes: We may use Your information for other
                  purposes, such as data analysis, identifying usage trends,
                  determining the effectiveness of our promotional campaigns and
                  to evaluate and improve our Service, products, services,
                  marketing and your experience.
                </li>
              </ul>

              <p className="text-base font-light text-slate-700">
                We may share Your personal information in the following
                situations:
              </p>
              <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
                <li>
                  With Service Providers: We may share Your personal information
                  with Service Providers to monitor and analyze the use of our
                  Service, to contact You.
                </li>
                <li>
                  For business transfers: We may share or transfer Your personal
                  information in connection with, or during negotiations of, any
                  merger, sale of Company assets, financing, or acquisition of
                  all or a portion of Our business to another company.
                </li>
                <li>
                  With Affiliates: We may share Your information with Our
                  affiliates, in which case we will require those affiliates to
                  honor this Privacy Policy. Affiliates include Our parent
                  company and any other subsidiaries, joint venture partners or
                  other companies that We control or that are under common
                  control with Us.
                </li>
                <li>
                  With business partners: We may share Your information with Our
                  business partners to offer You certain products, services or
                  promotions.
                </li>
                <li>
                  With other users: when You share personal information or
                  otherwise interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside.
                </li>
                <li>
                  With Your consent: We may disclose Your personal information
                  for any other purpose with Your consent.
                </li>
              </ul>

              <h2 className="text-2xl text-sky-600">
                Retention of Your Personal Data
              </h2>
              <p className="text-base font-light text-slate-700">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
                <br />
                <br />
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
              <h2 className="text-2xl text-sky-600">
                Transfer of Your Personal Data
              </h2>
              <p className="text-base font-light text-slate-700">
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction. <br />
                <br /> Your consent to this Privacy Policy followed by Your
                submission of such information represents Your agreement to that
                transfer. <br />
                <br />
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
              <h2 className="text-2xl text-sky-600">
                Disclosure of Your Personal Data
              </h2>

              <h3 className="text-xl text-slate-900">Business Transactions</h3>

              <p className="text-base font-light text-slate-700">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>

              <h3 className="text-xl text-slate-900">Law enforcement</h3>

              <p className="text-base font-light text-slate-700">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>

              <h3 className="text-xl text-slate-900">
                Other legal requirements
              </h3>

              <p className="text-base font-light text-slate-700">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>

              <h2 className="text-2xl text-sky-600">
                Security of Your Personal Data
              </h2>
              <p className="text-base font-light text-slate-700">
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>

              <h2 className="text-3xl text-slate-900">Children's Privacy</h2>
              <p className="text-base font-light text-slate-700">
                Our Service does not address anyone under the age of 18. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 18. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 18 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
                <br /> <br /> If We need to rely on consent as a legal basis for
                processing Your information and Your country requires consent
                from a parent, We may require Your parent's consent before We
                collect and use that information.
              </p>
              <h2 className="text-3xl text-slate-900">
                Links to Other Websites
              </h2>
              <p className="text-base font-light text-slate-700">
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit. <br /> <br />{" "}
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
              <h2 className="text-3xl text-slate-900">
                Changes to this Privacy Policy
              </h2>
              <p className="text-base font-light text-slate-700">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page. <br /> <br /> We will let You know via email and/or a
                prominent notice on Our Service, prior to the change becoming
                effective and update the "Last updated" date at the top of this
                Privacy Policy. <br /> <br /> You are advised to review this
                Privacy Policy periodically for any changes. Changes to this
                Privacy Policy are effective when they are posted on this page.
              </p>
              <h2 className="text-3xl text-slate-900">Contact Us</h2>
              <p className="text-base font-light text-slate-700">Contact Us</p>
              <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
                <li>By email: info@softleafapplications.com</li>
                <li>
                  By visiting this page on our website:{" "}
                  <a
                    className="text-blue-600"
                    href="https://softleafapplications.com"
                  >
                    https://softleafapplications.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer show={true}></Footer>
    </>
  );
};

export default privacyPolicy;
