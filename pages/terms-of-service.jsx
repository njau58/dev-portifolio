import React,{useState, useEffect} from "react";
import Header from  '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Useterms = () => {

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
  return (
    <>
          <Header
        navBgColor={`${colorNavChange ? "bg-white" : "bg-transparent"}`}
        linkActiveColor={`${
          colorNavChange ? "text-sky-800" : "text-theme-primary-500"
        }`}
        linkHoverColor={`${colorNavChange ? "text-theme-primary-500" : "text-slate-400"}`}
        linkBaseColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-900"
        }`}
        logoColor={`${colorNavChange ? "text-slate-600" : "text-slate-700"}`}
        navBorderBottom={`${colorNavChange ? "border-b-[1px]" : "border-b-0"}`}
        menuIconColor={`${
          colorNavChange ? "text-slate-600" : "text-slate-700"
        }`}
        logoAfterColor="text-slate-100"
      ></Header>
      <section className=" flex items-center  -mt-32  justify-center bg-terms bg-center bg-cover py-64">
        <h3 className="font-light text-5xl text-slate-700 mt-24">Terms of Service</h3>
      </section>

      <div className="flex flex-col  justify-center items-center rounded-lg shadow-2xl pb-24">
        <div className=" flex mt-9 mx-4 md:mx-24 flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <p className="text-base font-light text-slate-700">
              Thanks for using our products and services ("Services"). The
              Services are provided by Softleaf Applications. By using our
              Services, you are agreeing to these terms. Please read them
              carefully. Our Services are very diverse, so sometimes additional
              terms or product requirements (including age requirements) may
              apply. Additional terms will be available with the relevant
              Services, and those additional terms become part of your agreement
              with us if you use those Services.
            </p>
            <h2 className="text-3xl text-slate-900">1. Using our services</h2>
            <p className="text-base font-light text-slate-700">
              You must follow any policies made available to you within the
              Services. <br /> <br /> Don't misuse our Services. For example,
              don't interfere with our Services or try to access them using a
              method other than the interface and the instructions that we
              provide. You may use our Services only as permitted by law,
              including applicable export and re-export control laws and
              regulations. We may suspend or stop providing our Services to you
              if you do not comply with our terms or policies or if we are
              investigating suspected misconduct. <br /> <br /> Using our
              Services does not give you ownership of any intellectual property
              rights in our Services or the content you access. You may not use
              content from our Services unless you obtain permission from its
              owner or are otherwise permitted by law. These terms do not grant
              you the right to use any branding or logos used in our Services.
              Don't remove, obscure, or alter any legal notices displayed in or
              along with our Services.
            </p>
          </div>
          <h2 className="text-2xl text-slate-900">
            a) Personal Data that we collect about you
          </h2>
          <p className="text-base font-light text-slate-700">
            Personal Data is any information that relates to an identified or
            identifiable individual. The Personal Data that you provide directly
            to us through our Sites will be apparent from the context in which
            you provide the data. In particular:
          </p>
          <ul className="list-disc text-base font-light text-slate-700 ml-12 space-y-4 ">
            <li>
              When you register for an Softleaf account we collect your
              firstname, lastname, email address, gender, date of birth and
              account log-in credentials.
            </li>
            <li>
              When you fill-in our 'hire us' form to contact our team, we
              collect your full name, email address, organization, and anything
              else you tell us about your project, needs and timeline.
            </li>
          </ul>
          <p className="text-base font-light text-slate-700">
            When you respond to  Softleaf emails or surveys we collect your email
            address, name and any other information you choose to include in the
            body of your email or responses. If you contact us by phone, we will
            collect the phone number you use to call  Softleaf. If you contact us
            by phone as an Softleaf User, we may collect additional information in
            order to verify your identity.
          </p>
          <h2 className="text-2xl text-slate-900">
            b) Information that we collect automatically on our Sites
          </h2>
          <p className="text-base font-light text-slate-700">
            We also may collect information about your online activities on
            websites and connected devices over time and across third-party
            websites, devices, apps and other online features and services. We
            use Google Analytics on our Sites to help us analyze Your use of our
            Sites and diagnose technical issues.
            <br /> <br /> To learn more about the cookies that may be served
            through our Sites and how You can control our use of cookies and
            third-party analytics, please see our Cookie Policy.
          </p>
          <h2 className="text-3xl text-slate-900">
            2. Privacy and copyright protection
          </h2>
          <p className="text-base font-light text-slate-700">
            Softleaf's privacy policies explain how we treat your personal data
            and protect your privacy when you use our Services. By using our
            Services, you agree that  Softleaf can use such data in accordance with
            our privacy policies.
            <br /> <br /> We respond to notices of alleged copyright
            infringement and terminate accounts of repeat infringers according
            to the process set out in the copyright acts of the respective
            region.
            <br /> <br /> We provide information to help copyright holders
            manage their intellectual property online. If you think somebody is
            violating your copyrights and want to notify us, you can find
            information about submitting notices and Softleaf's policy about
            responding to notices by{" "}
            <a
              className="text-blue-600"
              href="https://www.softleafapplications.co.ke"
            >
              contacting us
            </a>
            .
          </p>
          <h2 className="text-3xl text-slate-900">
            3. Your content in our services
          </h2>
          <p className="text-base font-light text-slate-700">
            Some of our Services allow you to upload, submit, store, send or
            receive content. You retain ownership of any intellectual property
            rights that you hold in that content. In short, what belongs to you
            stays yours. <br /> <br /> When you upload, submit, store, send or
            receive content to or through our Services, you give  Softleaf (and
            those we work with) a worldwide license to use, host, store,
            reproduce, modify, create derivative works (such as those resulting
            from translations, adaptations or other changes we make so that your
            content works better with our Services), communicate, publish,
            publicly perform, publicly display and distribute such content. The
            rights you grant in this license are for the limited purpose of
            operating, promoting, and improving our Services, and to develop new
            ones. This license continues even if you stop using our Services
            (for example, for a story you have publish to 'Tell a Story'). Some
            Services may offer you ways to access and remove content that has
            been provided to that Service. Also, in some of our Services, there
            are terms or settings that narrow the scope of our use of the
            content submitted in those Services. Make sure you have the
            necessary rights to grant us this license for any content that you
            submit to our Services.
          </p>
          <h2 className="text-3xl text-slate-900">
            4. Links to other websites
          </h2>
          <p className="text-base font-light text-slate-700">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Softleaf. <br /> <br /> Softleaf
            has no control over, and assumes no responsibility for, the content,
            privacy policies, or practices of any third party web sites or
            services. You further acknowledge and agree that  Softleaf shall not be
            responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with use of
            or reliance on any such content, goods or services available on or
            through any such web sites or services. We strongly advise you to
            read the terms and conditions and privacy policies of any
            third-party web sites or services that you visit.
          </p>
          <h2 className="text-3xl text-slate-900">4. Termination</h2>
          <p className="text-base font-light text-slate-700">
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
            <br /> <br /> All provisions of the Terms which by their nature
            should survive termination shall survive termination, including,
            without limitation, ownership provisions, warranty disclaimers,
            indemnity and limitations of liability.
            <br /> <br /> We may terminate or suspend your account immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
            <br /> <br /> Upon termination, your right to use the Service will
            immediately cease. If you wish to terminate your account, you may
            simply discontinue using the Service.
            <br /> <br /> All provisions of the Terms which by their nature
            should survive termination shall survive termination, including,
            without limitation, ownership provisions, warranty disclaimers,
            indemnity and limitations of liability.
          </p>
          <h2 className="text-3xl text-slate-900">4. Governing law</h2>
          <p className="text-base font-light text-slate-700">
            These Terms shall be governed and construed in accordance with the
            laws of Kenya, without regard to its conflict of law provisions.{" "}
            <br /> <br />
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have between us regarding the Service.
          </p>
          <h2 className="text-3xl text-slate-900">5. Changes</h2>
          <p className="text-base font-light text-slate-700">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion. <br /> <br /> By continuing to access or use our Service after
            those revisions become effective, you agree to be bound by the
            revised terms. If you do not agree to the new terms, please stop
            using the Service.
          </p>
        </div>
      </div>
      <Footer show={true}></Footer>
    </>
  );
};

export default Useterms;
