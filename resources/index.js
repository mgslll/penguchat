function changeLanguage() {
  var language = document.getElementById("language-select").value;
  var logoImg = document.getElementById("logo-img");
  var body = document.body;
  var ul = document.querySelector(".ul");
  var mainHeading = document.querySelector(".main-heading");

  if (language === "ar") {
      // الترجمات العربية لتطبيق PenguChat
      document.getElementById("main-heading").innerHTML = "التطبيق الشامل للتواصل، الدردشة، ومشاركة اللحظات في الوقت الحقيقي بنقرة زر";
      document.getElementById("menu-Our Services").textContent = "خدماتنا";
      document.getElementById("menu-About Us").textContent = "من نحن";
      document.getElementById("menu-Partners").textContent = "الشركاء";
      document.getElementById("menu-Terms and Conditions").textContent = "الشروط والأحكام";
      document.getElementById("menu-News").textContent = "الأخبار";
      document.getElementById("request-button").textContent = "حمل الآن";
      document.getElementById("another-button").textContent = "اقرأ المزيد";
      logoImg.src = "resources/img/app_icon.png";

      document.getElementById("about-title").textContent = "؟penguChat ما هو تطبيق ";
      document.getElementById("about-description").innerHTML =
          "<span class='highlight' style='unicode-bidi: embed; direction: rtl;'>&#x200F;PenguChat</span> هو تطبيق شامل مصمم لتقديم تجربة دردشة سلسة وفورية تجمع بين سهولة الاستخدام والكفاءة. يتيح لك التطبيق إرسال الرسائل والصور والفيديوهات والملفات بسهولة، مع ميزة جدولة الرسائل لضمان توصيلها في الوقت المناسب. كما يتضمن ميزة تحويل الصوت إلى نص لتسهيل القراءة، ويسمح لك بتصفح مجموعة واسعة من المنتجات والخدمات. انضم الآن واستمتع بتجربة تواصل تجمع بين السرعة والذكاء، مما يجعل كل محادثة أكثر فاعلية وإنتاجية!";

      document.getElementById("features-title").textContent = "لماذا تطبيقنا  هو الخيار المثالي لك؟";
      document.getElementById("features-description").textContent =
          "سواء كنت بحاجة إلى إرسال رسائل فورية، مشاركة الصور والفيديوهات والملفات، أو حتى جدولة محادثاتك في اللحظة المناسبة، يقدم لك تطبيق PenguChat حلولاً مبتكرة وسلسة للتواصل تبقيك على اتصال بسرعة وسهولة.";

      // ترجمة نصوص البطاقات (الكروت)
      document.getElementById("card-1-title").textContent = "محادثات فورية ووسائط متعددة";
      document.getElementById("card-1-description").textContent =
          "تفاعل في محادثات فورية وشارك الصور والفيديوهات والملفات بسهولة مع أصدقائك وزملائك.";
      document.getElementById("card-2-title").textContent = "جدولة الرسائل";
      document.getElementById("card-2-description").textContent =
          "خطط لرسائلك مسبقًا لضمان إرسالها في اللحظة المناسبة تمامًا.";
      document.getElementById("card-3-title").textContent = "تحويل الصوت إلى نص";
      document.getElementById("card-3-description").textContent =
          "حوّل الرسائل الصوتية إلى نص بسرعة، مما يسهل متابعة المحادثات أثناء التنقل.";
      document.getElementById("card-4-title").textContent = "تصفح المنتجات والخدمات";
      document.getElementById("card-4-description").textContent =
          "اكتشف مجموعة واسعة من المنتجات والخدمات مباشرة داخل التطبيق لتلبية جميع احتياجاتك.";

      // ترجمة قسم تحميل التطبيق
      document.querySelector(".download-text").textContent = "قم بتحميل التطبيق الآن واستمتع بتجربة تواصل مبتكرة ومميزة مع PenguChat.";
      document.querySelector(".app-store").textContent = "uptodown تحميل من";
      document.querySelector(".google-play").textContent = " penguchat التحميل من  ";

      // ترجمة العناوين الإضافية
      document.querySelector(".section-title").textContent = "PenguChat تحميل تطبيق ";
      document.querySelector(".how-to-use h2").textContent = "كيفية استخدام التطبيق";

      // تعديل اتجاه النص والأسلوب للغة العربية
      body.setAttribute("rtl", "dir");
      mainHeading.style.marginTop = "90px";
      ul.style.marginLeft = "350px";
      body.style.fontFamily = "'Cairo', sans-serif";

      // ترجمة قسم الشهادات (Testimonials)
      document.querySelector(".testimonials-title").textContent = "الشهادات";
      var testimonials = document.querySelectorAll(".testimonial");
      if (testimonials.length >= 4) {
          testimonials[0].querySelector(".testimonial-text").textContent = '"ميزة جدولة الرسائل في PenguChat جعلت تواصلنا أسهل وأكثر مرونة."';
          testimonials[0].querySelector(".testimonial-author").textContent = "- محمد -";

          testimonials[1].querySelector(".testimonial-text").textContent = '"أحب أنني أستطيع إرسال فيديوهات بأي طول دون مشاكل، مما يجعل مشاركة محتواي فريدة."';
          testimonials[1].querySelector(".testimonial-author").textContent = "- سارة -";

          testimonials[2].querySelector(".testimonial-text").textContent = '"واجهة التطبيق البديهية تجعل تصفح المنتجات سهلاً للغاية، وهو ميزة كبيرة."';
          testimonials[2].querySelector(".testimonial-author").textContent = "- أحمد -";

          testimonials[3].querySelector(".testimonial-text").textContent = '"حسّن PenguChat جودة وكفاءة تواصلنا اليومي؛ أنصح به بشدة للجميع."';
          testimonials[3].querySelector(".testimonial-author").textContent = "- ليلى -";
      }

      // ترجمة قسم الفوتر (Footer)
      var footerImage = document.querySelector(".footer-image img");
      if (footerImage) {
          footerImage.alt = "صورة تحفيزية";
      }
      var motivationalQuotesTitle = document.querySelector(".motivational-quotes h3");
      if (motivationalQuotesTitle) {
          motivationalQuotesTitle.textContent = "اقتباسات تحفيزية";
      }
      var motivationalQuotesPs = document.querySelectorAll(".motivational-quotes p");
      if (motivationalQuotesPs.length >= 2) {
          motivationalQuotesPs[0].textContent = '"النجاح هو مجموع الجهود الصغيرة المتكررة كل يوم."';
          motivationalQuotesPs[1].textContent = '"لا تنتظر الفرصة، بل اصنعها."';
      }
      var socialMediaTitle = document.querySelector(".social-media h3");
      if (socialMediaTitle) {
          socialMediaTitle.textContent = "تابعونا";
      }
      var socialMediaLinks = document.querySelectorAll(".social-media ul li a");
      socialMediaLinks.forEach(function(link) {
          if (link.textContent.includes("Instagram")) {
              link.textContent = "إنستغرام";
          } else if (link.textContent.includes("Facebook")) {
              link.textContent = "فيسبوك";
          }
      });
      var contactUsTitle = document.querySelector(".contact-info h3");
      if (contactUsTitle) {
          contactUsTitle.textContent = "اتصل بنا";
      }
      var footerBottomP = document.querySelector(".footer-bottom p");
      if (footerBottomP) {
          footerBottomP.innerHTML = "&copy; 2023 PenguChat. جميع الحقوق محفوظة.";
      }

  } else if (language === "en") {
      // الترجمات الإنجليزية لتطبيق PenguChat
      document.getElementById("main-heading").innerHTML = "The comprehensive app to connect, chat, and share moments in real-time at the click of a button";
      document.getElementById("menu-Our Services").textContent = "Our Services";
      document.getElementById("menu-About Us").textContent = "About Us";
      document.getElementById("menu-Partners").textContent = "Partners";
      document.getElementById("menu-Terms and Conditions").textContent = "Terms and Conditions";
      document.getElementById("menu-News").textContent = "News";
      document.getElementById("request-button").textContent = "Request Now";
      document.getElementById("another-button").textContent = "Learn More";
      logoImg.src = "resources/img/app_icon.png";

      document.getElementById("about-title").textContent = "What is PenguChat?";
      document.getElementById("about-description").textContent =
          "PenguChat is a comprehensive application designed to deliver a seamless, real-time chat experience that's both user-friendly and efficient. The app allows you to easily send messages, photos, videos, and files, with the added convenience of scheduling messages for timely delivery. It also features a voice-to-text conversion to simplify reading, and enables you to browse a wide range of products and services. Join PenguChat now and enjoy a communication experience that blends speed and intelligence, making every conversation more effective and productive.";

      document.getElementById("features-title").textContent = "Why PenguChat is Your Ideal Choice?";
      document.getElementById("features-description").textContent =
          "Whether you need to send instant messages, share photos, videos, and files, or even schedule your chats for the perfect moment, PenguChat offers you seamless and innovative communication solutions that keep you connected with speed and ease.";

      // ترجمة نصوص البطاقات (الكروت)
      document.getElementById("card-1-title").textContent = "Instant Messaging & Multimedia";
      document.getElementById("card-1-description").textContent =
          "Engage in real-time chats and effortlessly share photos, videos, and files with friends and colleagues.";
      document.getElementById("card-2-title").textContent = "Scheduled Messaging";
      document.getElementById("card-2-description").textContent =
          "Plan your messages in advance to ensure they are sent exactly when you need them.";
      document.getElementById("card-3-title").textContent = "Voice-to-Text Conversion";
      document.getElementById("card-3-description").textContent =
          "Quickly convert voice messages into text, making it easy to catch up on conversations on the go.";
      document.getElementById("card-4-title").textContent = "Browse Products & Services";
      document.getElementById("card-4-description").textContent =
          "Discover a wide range of products and services directly within the app to meet all your needs.";

      // ترجمة قسم تحميل التطبيق
      document.querySelector(".download-text").textContent = "Download the app now and enjoy an innovative and outstanding communication experience with PenguChat.";
      document.querySelector(".app-store").textContent = "Download on the App Store";
      document.querySelector(".google-play").textContent = "Get it on Google Play";

      // ترجمة العناوين الإضافية
      document.querySelector(".section-title").textContent = "Download PenguChat App";
      document.querySelector(".how-to-use h2").textContent = "How to Use the Application";

      // تعديل اتجاه النص والأسلوب للغة الإنجليزية
      body.setAttribute("dir", "ltr");
      ul.style.marginLeft = "80px";
      ul.style.marginRight = "0";
      body.style.fontFamily = "'Poppins', sans-serif";

      // ترجمة قسم الشهادات (Testimonials)
      document.querySelector(".testimonials-title").textContent = "Testimonials";
      var testimonials = document.querySelectorAll(".testimonial");
      if (testimonials.length >= 4) {
          testimonials[0].querySelector(".testimonial-text").textContent = '"The scheduled messaging feature in PenguChat made our communication so much easier and more flexible."';
          testimonials[0].querySelector(".testimonial-author").textContent = "- Mohammed -";

          testimonials[1].querySelector(".testimonial-text").textContent = '"I love that I can send videos of any length without any issues, making my content sharing more unique."';
          testimonials[1].querySelector(".testimonial-author").textContent = "- Sarah -";

          testimonials[2].querySelector(".testimonial-text").textContent = '"The app\'s intuitive interface makes browsing products very accessible, which is a huge plus."';
          testimonials[2].querySelector(".testimonial-author").textContent = "- Ahmed -";

          testimonials[3].querySelector(".testimonial-text").textContent = '"PenguChat has improved the quality and efficiency of our daily communication; I highly recommend it to everyone."';
          testimonials[3].querySelector(".testimonial-author").textContent = "- Layla -";
      }

      // ترجمة قسم الفوتر (Footer)
      var footerImage = document.querySelector(".footer-image img");
      if (footerImage) {
          footerImage.alt = "Motivational Image";
      }
      var motivationalQuotesTitle = document.querySelector(".motivational-quotes h3");
      if (motivationalQuotesTitle) {
          motivationalQuotesTitle.textContent = "Motivational Quotes";
      }
      var motivationalQuotesPs = document.querySelectorAll(".motivational-quotes p");
      if (motivationalQuotesPs.length >= 2) {
          motivationalQuotesPs[0].textContent = '"Success is the sum of small efforts repeated every day."';
          motivationalQuotesPs[1].textContent = '"Don\'t wait for the opportunity, create it."';
      }
      var socialMediaTitle = document.querySelector(".social-media h3");
      if (socialMediaTitle) {
          socialMediaTitle.textContent = "Follow Us";
      }
      var socialMediaLinks = document.querySelectorAll(".social-media ul li a");
      socialMediaLinks.forEach(function(link) {
          if (link.textContent.includes("Instagram")) {
              link.textContent = "Instagram";
          } else if (link.textContent.includes("Facebook")) {
              link.textContent = "Facebook";
          }
      });
      var contactUsTitle = document.querySelector(".contact-info h3");
      if (contactUsTitle) {
          contactUsTitle.textContent = "Contact Us";
      }
      var footerBottomP = document.querySelector(".footer-bottom p");
      if (footerBottomP) {
          footerBottomP.innerHTML = "&copy; 2023 PenguChat. All rights reserved.";
      }

  } else if (language === "fr") {
      // الترجمات الفرنسية لتطبيق PenguChat
      document.getElementById("main-heading").innerHTML = "L'application complète pour se connecter, discuter et partager des moments en temps réel en un clic";
      document.getElementById("menu-Our Services").textContent = "Nos Services";
      document.getElementById("menu-About Us").textContent = "À propos de nous";
      document.getElementById("menu-Partners").textContent = "Partenaires";
      document.getElementById("menu-Terms and Conditions").textContent = "Termes et conditions";
      document.getElementById("menu-News").textContent = "Actualités";
      document.getElementById("request-button").textContent = " Télécharger maintenant";
      document.getElementById("another-button").textContent = "En savoir plus";
      logoImg.src = "resources/img/app_icon.png";

      document.getElementById("about-title").textContent = "Qu'est-ce que PenguChat ?";
      document.getElementById("about-description").innerHTML =
          "<span class='highlight'>PenguChat</span> est une application complète conçue pour offrir une expérience de chat en temps réel fluide, à la fois conviviale et efficace. L'application vous permet d'envoyer facilement des messages, des photos, des vidéos et des fichiers, avec l'avantage supplémentaire de planifier l'envoi des messages pour une livraison opportune. Elle propose également une fonctionnalité de conversion de la voix en texte pour faciliter la lecture, et vous permet de parcourir une large gamme de produits et de services. Rejoignez PenguChat dès maintenant et profitez d'une expérience de communication qui allie rapidité et intelligence, rendant chaque conversation plus efficace et productive !";

      document.getElementById("features-title").textContent = "Pourquoi PenguChat est votre choix idéal ?";
      document.getElementById("features-description").textContent =
          "Que vous ayez besoin d'envoyer des messages instantanés, de partager des photos, des vidéos et des fichiers, ou même de programmer vos chats pour le moment parfait, PenguChat vous offre des solutions de communication fluides et innovantes qui vous maintiennent connecté avec rapidité et facilité.";

      // ترجمة نصوص البطاقات (الكروت)
      document.getElementById("card-1-title").textContent = "Messagerie instantanée & Multimédia";
      document.getElementById("card-1-description").textContent =
          "Participez à des conversations en temps réel et partagez sans effort des photos, vidéos et fichiers avec vos amis et collègues.";
      document.getElementById("card-2-title").textContent = "Messages programmés";
      document.getElementById("card-2-description").textContent =
          "Planifiez vos messages à l'avance pour vous assurer qu'ils soient envoyés exactement au moment souhaité.";
      document.getElementById("card-3-title").textContent = "Conversion voix en texte";
      document.getElementById("card-3-description").textContent =
          "Convertissez rapidement les messages vocaux en texte, facilitant ainsi le suivi des conversations en déplacement.";
      document.getElementById("card-4-title").textContent = "Parcourir produits & services";
      document.getElementById("card-4-description").textContent =
          "Découvrez une large gamme de produits et de services directement dans l'application pour répondre à tous vos besoins.";

      // ترجمة قسم تحميل التطبيق
      document.querySelector(".download-text").textContent = "Téléchargez l'application dès maintenant et profitez d'une expérience de communication innovante et exceptionnelle avec PenguChat.";
      document.querySelector(".app-store").textContent = "Télécharger sur uptodown";
      document.querySelector(".google-play").textContent = "Disponible sur penguchat";

      // ترجمة العناوين الإضافية
      document.querySelector(".section-title").textContent = "Télécharger l'application PenguChat";
      document.querySelector(".how-to-use h2").textContent = "Comment utiliser l'application";

      // تعديل اتجاه النص والأسلوب للغة الفرنسية
      body.setAttribute("dir", "ltr");
      ul.style.marginLeft = "-50px";
      ul.style.marginRight = "0";
      body.style.fontFamily = "'Poppins', sans-serif";

      // ترجمة قسم Témoignages (Testimonials)
      document.querySelector(".testimonials-title").textContent = "Témoignages";
      var testimonials = document.querySelectorAll(".testimonial");
      if (testimonials.length >= 4) {
          testimonials[0].querySelector(".testimonial-text").textContent = '"La fonctionnalité de messagerie programmée de PenguChat a rendu notre communication tellement plus facile et flexible."';
          testimonials[0].querySelector(".testimonial-author").textContent = "- Mohammed -";

          testimonials[1].querySelector(".testimonial-text").textContent = '"J\'adore pouvoir envoyer des vidéos de n\'importe quelle durée sans aucun problème, rendant le partage de mon contenu plus unique."';
          testimonials[1].querySelector(".testimonial-author").textContent = "- Sarah -";

          testimonials[2].querySelector(".testimonial-text").textContent = '"L\'interface intuitive de l\'application rend la navigation parmi les produits très accessible, ce qui est un énorme avantage."';
          testimonials[2].querySelector(".testimonial-author").textContent = "- Ahmed -";

          testimonials[3].querySelector(".testimonial-text").textContent = '"PenguChat a amélioré la qualité et l\'efficacité de notre communication quotidienne; je le recommande vivement à tous."';
          testimonials[3].querySelector(".testimonial-author").textContent = "- Layla -";
      }

      // ترجمة قسم FFooter en français
      var footerImage = document.querySelector(".footer-image img");
      if (footerImage) {
          footerImage.alt = "Image motivante";
      }
      var motivationalQuotesTitle = document.querySelector(".motivational-quotes h3");
      if (motivationalQuotesTitle) {
          motivationalQuotesTitle.textContent = "Citations motivantes";
      }
      var motivationalQuotesPs = document.querySelectorAll(".motivational-quotes p");
      if (motivationalQuotesPs.length >= 2) {
          motivationalQuotesPs[0].textContent = '"Le succès est la somme de petits efforts répétés chaque jour."';
          motivationalQuotesPs[1].textContent = '"N\'attendez pas l\'opportunité, créez-la."';
      }
      var socialMediaTitle = document.querySelector(".social-media h3");
      if (socialMediaTitle) {
          socialMediaTitle.textContent = "Suivez-nous";
      }
      var socialMediaLinks = document.querySelectorAll(".social-media ul li a");
      socialMediaLinks.forEach(function(link) {
          if (link.textContent.includes("Instagram")) {
              link.textContent = "Instagram";
          } else if (link.textContent.includes("Facebook")) {
              link.textContent = "Facebook";
          }
      });
      var contactUsTitle = document.querySelector(".contact-info h3");
      if (contactUsTitle) {
          contactUsTitle.textContent = "Contactez-nous";
      }
      var footerBottomP = document.querySelector(".footer-bottom p");
      if (footerBottomP) {
          footerBottomP.innerHTML = "&copy; 2023 PenguChat. Tous droits réservés.";
      }
  }
}
// عند النقر على زر "Download Now" 
document.getElementById("request-button").addEventListener("click", function() {
  document.getElementById("download-app").scrollIntoView({ behavior: 'smooth' });
});

// عند النقر على زر "Read more"
document.getElementById("another-button").addEventListener("click", function() {
  document.getElementById("how-to-use").scrollIntoView({ behavior: 'smooth' });
});

// عند النقر على زر "Our Services"
document.getElementById("menu-Our Services").addEventListener("click", function() {
  document.getElementById("services-section").scrollIntoView({ behavior: 'smooth' });
});

// عند النقر على زر "News"
document.getElementById("menu-News").addEventListener("click", function() {
  document.getElementById("footer").scrollIntoView({ behavior: 'smooth' });
});

// عند النقر على زر "Partners" فتح مودال الشركاء
document.getElementById("menu-Partners").addEventListener("click", function () {
  document.getElementById("partnersModal").style.display = "block";
});

// إغلاق المودال عند النقر على رمز الإغلاق
document.getElementById("partnersClose").addEventListener("click", function () {
  document.getElementById("partnersModal").style.display = "none";
});

// إغلاق المودال عند النقر خارج محتواه
window.addEventListener("click", function (event) {
  const modal = document.getElementById("partnersModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// محتوى الشروط والأحكام للمودال باللغات المختلفة
const modalEnglishContent = `
<h1>Privacy Policy for <span class="colored">PenguChat</span></h1>
<p><strong>Effective Date:</strong> February 8, 2025</p>
<p><strong>Last Updated:</strong> February 8, 2025</p>
<p>
  Welcome to <span class="colored">PenguChat</span>! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use the <span class="colored">PenguChat</span> application.
</p>
<h2>1. Information We Collect</h2>
<h3>1.1 Information You Provide to Us:</h3>
<ul>
  <li>
    <strong>Account Information:</strong> When you create an account on <span class="colored">PenguChat</span>, we may collect information such as your name, email address (<span class="email">PenguChat@gmail.com</span>), and phone number.
  </li>
  <li>
    <strong>Content You Share:</strong> We collect text messages, images, videos, and other files you send or receive through the app.
  </li>
  <li>
    <strong>Payment Information:</strong> If you use paid services, we may collect payment details such as credit card information.
  </li>
</ul>
<h3>1.2 Information We Collect Automatically:</h3>
<ul>
  <li>
    <strong>Device Information:</strong> We collect information about your device, such as the device type, operating system, IP address, and unique device identifier.
  </li>
  <li>
    <strong>Usage Data:</strong> We collect information about how you interact with the app, such as the time of use, features you use, and errors you may encounter.
  </li>
</ul>
<h3>1.3 Information from Third Parties:</h3>
<p>
  We may obtain information from third parties, such as service providers or business partners, to enhance your experience on <span class="colored">PenguChat</span>.
</p>
<h2>2. How We Use Your Information</h2>
<p>We use the information we collect for the following purposes:</p>
<ul>
  <li>
    <strong>Providing the Service:</strong> To operate <span class="colored">PenguChat</span> and improve the user experience.
  </li>
  <li>
    <strong>Improving the App:</strong> To understand how you use the app and develop it further.
  </li>
  <li>
    <strong>Security:</strong> To protect your account and prevent fraud.
  </li>
  <li>
    <strong>Customer Support:</strong> To respond to your inquiries and resolve technical issues.
  </li>
  <li>
    <strong>Marketing:</strong> To send promotional offers and newsletters (if you have consented to this).
  </li>
</ul>
<h2>3. Sharing Your Information</h2>
<p>
  We do not sell your personal information to third parties. However, we may share your information in the following cases:
</p>
<ul>
  <li>
    <strong>With Service Providers:</strong> Such as data hosting or payment service providers.
  </li>
  <li>
    <strong>To Protect Our Rights:</strong> If we are required to disclose information by law or to protect our rights and property.
  </li>
  <li>
    <strong>With Your Consent:</strong> If you agree to share your information with third parties.
  </li>
</ul>
<h2>4. Security of Your Information</h2>
<p>
  We use technical and administrative security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of online transmission or storage is 100% secure.
</p>
<h2>5. Your Rights</h2>
<p>You have the right to:</p>
<ul>
  <li>Access the personal information we hold about you.</li>
  <li>Request correction or deletion of your information.</li>
  <li>Object to the processing of your information.</li>
  <li>Withdraw your consent to the use of your information.</li>
</ul>
<p>
  To exercise these rights, please contact us at: <span class="email">PenguChat@gmail.com</span>.
</p>
<h2>6. Changes to the Privacy Policy</h2>
<p>
  We may update this Privacy Policy from time to time. We will notify you of any significant changes through the app or via email.
</p>
<h2>7. Contact Us</h2>
<p>
  If you have any questions or concerns about this Privacy Policy, please contact us at: <span class="email">PenguChat@gmail.com</span>.
</p>
<h2>8. Terms of Service</h2>
<p>
  By using <span class="colored">PenguChat</span>, you agree to abide by the following terms and conditions. You must not misuse the app or attempt to compromise its security. <span class="colored">PenguChat</span> reserves the right to modify these terms at any time without prior notice. Continued use of the app constitutes your acceptance of any such changes.
</p>
`;
const modalArabicContent = `
<h1>سياسة الخصوصية لتطبيق <span class="colored">PenguChat</span></h1>
<p><strong>تاريخ السريان:</strong> 8 فبراير 2025</p>
<p><strong>آخر تحديث:</strong> 8 فبراير 2025</p>
<p>
  مرحبًا بكم في <span class="colored">PenguChat</span>! نحن نُقدّر خصوصيتكم وملتزمون بحماية معلوماتكم الشخصية. تشرح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتكم واستخدامها ومشاركتها وحمايتها عند استخدامكم لتطبيق <span class="colored">PenguChat</span>.
</p>
<h2>1. المعلومات التي نجمعها</h2>
<h3>1.1 المعلومات التي تقدمها أنت:</h3>
<ul>
  <li>
    <strong>معلومات الحساب:</strong> عند إنشاء حساب على <span class="colored">PenguChat</span>، قد نقوم بجمع معلومات مثل اسمكم، وعنوان بريدكم الإلكتروني (<span class="email">PenguChat@gmail.com</span>)، ورقم الهاتف.
  </li>
  <li>
    <strong>المحتوى الذي تشاركونه:</strong> نقوم بجمع الرسائل النصية والصور والفيديوهات والملفات الأخرى التي ترسلونها أو تستقبلونها عبر التطبيق.
  </li>
  <li>
    <strong>معلومات الدفع:</strong> إذا كنتم تستخدمون الخدمات المدفوعة، قد نقوم بجمع تفاصيل الدفع مثل معلومات بطاقة الائتمان.
  </li>
</ul>
<h3>1.2 المعلومات التي نجمعها تلقائيًا:</h3>
<ul>
  <li>
    <strong>معلومات الجهاز:</strong> نقوم بجمع معلومات حول جهازكم، مثل نوع الجهاز، ونظام التشغيل، وعنوان الـ IP، والمعرف الفريد للجهاز.
  </li>
  <li>
    <strong>بيانات الاستخدام:</strong> نقوم بجمع معلومات حول كيفية تفاعلكم مع التطبيق، مثل وقت الاستخدام، والميزات التي تستخدمونها، والأخطاء التي قد تواجهونها.
  </li>
</ul>
<h3>1.3 المعلومات من أطراف ثالثة:</h3>
<p>
  قد نحصل على معلومات من أطراف ثالثة، مثل مقدمي الخدمات أو الشركاء التجاريين، لتحسين تجربتكم على <span class="colored">PenguChat</span>.
</p>
<h2>2. كيفية استخدام معلوماتكم</h2>
<p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
<ul>
  <li>
    <strong>تقديم الخدمة:</strong> لتشغيل تطبيق <span class="colored">PenguChat</span> وتحسين تجربة المستخدم.
  </li>
  <li>
    <strong>تحسين التطبيق:</strong> لفهم كيفية استخدامكم للتطبيق وتطويره بشكل أكبر.
  </li>
  <li>
    <strong>الأمان:</strong> لحماية حسابكم ومنع الاحتيال.
  </li>
  <li>
    <strong>دعم العملاء:</strong> للرد على استفساراتكم وحل المشكلات الفنية.
  </li>
  <li>
    <strong>التسويق:</strong> لإرسال العروض الترويجية والنشرات الإخبارية (إذا وافقتم على ذلك).
  </li>
</ul>
<h2>3. مشاركة معلوماتكم</h2>
<p>
  نحن لا نقوم ببيع معلوماتكم الشخصية لأطراف ثالثة. ومع ذلك، قد نشارك معلوماتكم في الحالات التالية:
</p>
<ul>
  <li>
    <strong>مع مقدمي الخدمات:</strong> مثل مقدمي خدمات استضافة البيانات أو خدمات الدفع.
  </li>
  <li>
    <strong>لحماية حقوقنا:</strong> إذا كنا مطالبين بالكشف عن المعلومات بموجب القانون أو لحماية حقوقنا وممتلكاتنا.
  </li>
  <li>
    <strong>بموافقتكم:</strong> إذا وافقتم على مشاركة معلوماتكم مع أطراف ثالثة.
  </li>
</ul>
<h2>4. أمان معلوماتكم</h2>
<p>
  نستخدم تدابير أمنية تقنية وإدارية لحماية معلوماتكم من الوصول أو التعديل أو الكشف غير المصرح به. ومع ذلك، لا توجد طريقة نقل أو تخزين عبر الإنترنت آمنة بنسبة 100%.
</p>
<h2>5. حقوقكم</h2>
<p>لديكم الحق في:</p>
<ul>
  <li>الوصول إلى المعلومات الشخصية التي نحتفظ بها عنكم.</li>
  <li>طلب تصحيح أو حذف معلوماتكم.</li>
  <li>اعتراض على معالجة معلوماتكم.</li>
  <li>سحب موافقتكم على استخدام معلوماتكم.</li>
</ul>
<p>
  لممارسة هذه الحقوق، يرجى الاتصال بنا على: <span class="email">PenguChat@gmail.com</span>.
</p>
<h2>6. تغييرات سياسة الخصوصية</h2>
<p>
  قد نقوم بتحديث سياسة الخصوصية هذه من حين لآخر. سنخطركم بأي تغييرات هامة عبر التطبيق أو عبر البريد الإلكتروني.
</p>
<h2>7. اتصل بنا</h2>
<p>
  إذا كان لديكم أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى الاتصال بنا على: <span class="email">PenguChat@gmail.com</span>.
</p>
<h2>8. شروط الخدمة</h2>
<p>
  باستخدامكم لتطبيق <span class="colored">PenguChat</span>، فإنكم توافقون على الالتزام بالشروط والأحكام التالية. يجب ألا تُسيئوا استخدام التطبيق أو تحاولوا التلاعب بأمانه. يحتفظ <span class="colored">PenguChat</span> بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق. استمرار استخدام التطبيق يعتبر موافقتكم على أي تغييرات.
</p>
`;
const modalFrenchContent = `
<h1>Politique de confidentialité pour <span class="colored">PenguChat</span></h1>
<p><strong>Date d'effet :</strong> 8 février 2025</p>
<p><strong>Dernière mise à jour :</strong> 8 février 2025</p>
<p>
  Bienvenue sur <span class="colored">PenguChat</span> ! Nous attachons une grande importance à votre vie privée et nous nous engageons à protéger vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez l'application <span class="colored">PenguChat</span>.
</p>
<h2>1. Informations que nous collectons</h2>
<h3>1.1 Informations que vous nous fournissez :</h3>
<ul>
  <li>
    <strong>Informations de compte :</strong> Lorsque vous créez un compte sur <span class="colored">PenguChat</span>, nous pouvons collecter des informations telles que votre nom, votre adresse e-mail (<span class="email">PenguChat@gmail.com</span>) et votre numéro de téléphone.
  </li>
  <li>
    <strong>Contenu que vous partagez :</strong> Nous collectons les messages texte, images, vidéos et autres fichiers que vous envoyez ou recevez via l'application.
  </li>
  <li>
    <strong>Informations de paiement :</strong> Si vous utilisez des services payants, nous pouvons collecter des informations de paiement telles que les détails de votre carte de crédit.
  </li>
</ul>
<h3>1.2 Informations que nous collectons automatiquement :</h3>
<ul>
  <li>
    <strong>Informations sur l'appareil :</strong> Nous collectons des informations concernant votre appareil, telles que le type d'appareil, le système d'exploitation, l'adresse IP et un identifiant unique.
  </li>
  <li>
    <strong>Données d'utilisation :</strong> Nous recueillons des informations sur la manière dont vous utilisez l'application, par exemple l'heure d'utilisation, les fonctionnalités utilisées et les éventuelles erreurs.
  </li>
</ul>
<h3>1.3 Informations de tiers :</h3>
<p>
  Nous pouvons obtenir des informations de tiers, tels que des fournisseurs de services ou des partenaires commerciaux, afin d'améliorer votre expérience sur <span class="colored">PenguChat</span>.
</p>
<h2>2. Comment nous utilisons vos informations</h2>
<p>Nous utilisons les informations recueillies pour les finalités suivantes :</p>
<ul>
  <li>
    <strong>Fourniture du service :</strong> Pour faire fonctionner <span class="colored">PenguChat</span> et améliorer l'expérience utilisateur.
  </li>
  <li>
    <strong>Amélioration de l'application :</strong> Pour comprendre comment vous utilisez l'application et la développer davantage.
  </li>
  <li>
    <strong>Sécurité :</strong> Pour protéger votre compte et prévenir la fraude.
  </li>
  <li>
    <strong>Support client :</strong> Pour répondre à vos questions et résoudre les problèmes techniques.
  </li>
  <li>
    <strong>Marketing :</strong> Pour envoyer des offres promotionnelles et des newsletters (si vous y consentez).
  </li>
</ul>
<h2>3. Partage de vos informations</h2>
<p>
  Nous ne vendons pas vos informations personnelles à des tiers. Toutefois, nous pouvons partager vos informations dans les cas suivants :
</p>
<ul>
  <li>
    <strong>Avec des fournisseurs de services :</strong> Par exemple, des hébergeurs de données ou des fournisseurs de services de paiement.
  </li>
  <li>
    <strong>Pour protéger nos droits :</strong> Si nous sommes tenus de divulguer des informations en vertu de la loi ou pour protéger nos droits et nos biens.
  </li>
  <li>
    <strong>Avec votre consentement :</strong> Si vous acceptez de partager vos informations avec des tiers.
  </li>
</ul>
<h2>4. Sécurité de vos informations</h2>
<p>
  Nous utilisons des mesures de sécurité techniques et administratives pour protéger vos informations contre tout accès, modification ou divulgation non autorisée. Toutefois, aucune méthode de transmission ou de stockage en ligne n'est 100 % sécurisée.
</p>
<h2>5. Vos droits</h2>
<p>Vous avez le droit de :</p>
<ul>
  <li>Accéder aux informations personnelles que nous détenons à votre sujet.</li>
  <li>Demander la correction ou la suppression de vos informations.</li>
  <li>Vous opposer au traitement de vos informations.</li>
  <li>Retirer votre consentement quant à l'utilisation de vos informations.</li>
</ul>
<p>
  Pour exercer ces droits, veuillez nous contacter à : <span class="email">PenguChat@gmail.com</span>.
</p>
<h2>6. Modifications de la politique de confidentialité</h2>
<p>
  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement significatif via l'application ou par e-mail.
</p>
<h2>7. Contactez-nous</h2>
<p>
  Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à : <span class="email">PenguChat@gmail.com</span>.
</p>
<h2>8. Conditions d'utilisation</h2>
<p>
  En utilisant <span class="colored">PenguChat</span>, vous acceptez de respecter les termes et conditions suivants. Vous ne devez pas abuser de l'application ni tenter de compromettre sa sécurité. <span class="colored">PenguChat</span> se réserve le droit de modifier ces conditions à tout moment sans préavis. L'utilisation continue de l'application constitue votre acceptation de ces modifications.
</p>
`;

// محتوى "About Us" للمودال باللغات المختلفة
const aboutEnglishContent = `
<h1>Welcome to PenguChat!</h1>
<p>In the face of the challenging communication landscape—where traditional apps often restrict the introduction of many essential features—PenguChat was born as an innovative solution to bridge the gap and deliver a comprehensive communication experience. We are here to provide you with a unique platform built on the values of innovation, simplicity, security, and effective communication.</p>
<h2>Our Vision</h2>
<p>We aim to create a digital platform that unites people through seamless and intuitive communication, making a real difference in their daily lives. Our goal is to overcome traditional technological limitations and deliver smart solutions that elevate interaction and engagement.</p>
<h2>Our Mission</h2>
<ul>
  <li><strong>Enhancing communication:</strong> Connecting individuals and communities in real-time.</li>
  <li><strong>Innovative features:</strong> Offering tools that adapt to your needs.</li>
  <li><strong>Security and Privacy:</strong> Ensuring every interaction is safe and transparent.</li>
</ul>
<h2>Our Story</h2>
<p>Inspired by the challenges of digital communication and the restrictions of traditional apps, PenguChat was conceived during times when essential features were missing. A remarkable individual, known for his creativity, dedication, and visionary leadership, sparked the idea that transformed our vision into reality.</p>
<h2>The Team Behind PenguChat</h2>
<p>The project is led by <strong>gasMIA MOHAMED</strong>, who studied at the Higher School of Professors in Media at Al-Qubba. With his extensive expertise and keen vision, he turned an inspiring idea into a tangible solution, setting the stage for a future where technology and innovation work hand in hand.</p>
<h2>Our Future</h2>
<p>Although we are in the early stages of our journey, we believe the future holds numerous opportunities and challenges that will propel us toward continuous growth. We are committed to evolving PenguChat and adding features that enhance your communication experience.</p>
<p>Thank you for being part of our journey toward innovation and connection. We appreciate your trust and support as we work to build a better future for digital communication.</p>
`;
const aboutArabicContent = `
<h1>مرحباً بكم في PenguChat!</h1>
<p>في ظل التحديات الكبيرة في عالم التواصل الرقمي، حيث تقيد التطبيقات التقليدية تقديم العديد من الميزات الأساسية، وُلد PenguChat كحل مبتكر لجسر الفجوة وتقديم تجربة تواصل شاملة. نحن هنا لنوفر لكم منصة فريدة ترتكز على قيم الابتكار، البساطة، الأمان، والتواصل الفعال.</p>
<h2>رؤيتنا</h2>
<p>نسعى لإنشاء منصة رقمية تجمع الناس من خلال تواصل سلس وبديهي يحدث فرقاً حقيقياً في حياتهم اليومية. هدفنا هو تجاوز القيود التقنية التقليدية وتقديم حلول ذكية تعزز التفاعل والاتصال.</p>
<h2>رسالتنا</h2>
<ul>
  <li><strong>تحسين التواصل:</strong> ربط الأفراد والمجتمعات في الوقت الحقيقي.</li>
  <li><strong>ميزات مبتكرة:</strong> تقديم أدوات تتكيف مع احتياجاتكم.</li>
  <li><strong>الأمان والخصوصية:</strong> ضمان أمان وشفافية كل تفاعل.</li>
</ul>
<h2>قصتنا</h2>
<p>استُلهم PenguChat من تحديات التواصل الرقمي والقيود التي تفرضها التطبيقات التقليدية، حيث كان ينقصها العديد من الميزات الأساسية. وقد ألهمنا شخص متميز، معروف بإبداعه وتفانيه ورؤيته الثاقبة، لتحويل هذه الفكرة إلى واقع ملموس.</p>
<h2>الفريق وراء PenguChat</h2>
<p>يقود المشروع <strong>gasMIA MOHAMED</strong>، الذي درس في المدرسة العليا للأساتذة إعلام الي القبة. بخبرته الواسعة ورؤيته الثاقبة، حوّل فكرة ملهمة إلى حل عملي، ممهداً الطريق لمستقبل يجمع بين التكنولوجيا والابتكار.</p>
<h2>مستقبلنا</h2>
<p>رغم أننا ما زلنا في المراحل الأولى من رحلتنا، نؤمن أن المستقبل يحمل العديد من الفرص والتحديات التي ستدفعنا نحو النمو المستمر. نحن ملتزمون بتطوير PenguChat وإضافة ميزات جديدة تعزز تجربتكم في التواصل.</p>
<p>شكراً لكونكم جزءاً من رحلتنا نحو الابتكار والتواصل. نحن نقدر ثقتكم ودعمكم بينما نعمل لبناء مستقبل أفضل للتواصل الرقمي.</p>
`;
const aboutFrenchContent = `
<h1>Bienvenue sur PenguChat !</h1>
<p>Face aux défis du paysage de la communication digitale, où les applications traditionnelles limitent souvent l’introduction de nombreuses fonctionnalités essentielles, PenguChat est né comme une solution innovante pour combler le fossé et offrir une expérience de communication complète. Nous sommes ici pour vous fournir une plateforme unique fondée sur les valeurs d’innovation, de simplicité, de sécurité et de communication efficace.</p>
<h2>Notre Vision</h2>
<p>Nous aspirons à créer une plateforme numérique qui réunit les gens grâce à une communication fluide et intuitive, apportant une véritable différence dans leur quotidien. Notre objectif est de dépasser les limites technologiques traditionnelles et de proposer des solutions intelligentes qui améliorent l’interaction et l’engagement.</p>
<h2>Notre Mission</h2>
<ul>
  <li><strong>Améliorer la communication :</strong> Connecter individus et communautés en temps réel.</li>
  <li><strong>Fonctionnalités innovantes :</strong> Offrir des outils adaptés à vos besoins.</li>
  <li><strong>Sécurité et confidentialité :</strong> Garantir la sécurité et la transparence de chaque interaction.</li>
</ul>
<h2>Notre Histoire</h2>
<p>PenguChat s’est inspiré des défis de la communication digitale et des restrictions imposées par les applications traditionnelles, qui manquaient de nombreuses fonctionnalités essentielles. Une personne remarquable, reconnue pour sa créativité, son dévouement et sa vision, nous a inspirés à transformer cette idée en réalité concrète.</p>
<h2>L’équipe derrière PenguChat</h2>
<p>Le projet est dirigé par <strong>gasMIA MOHAMED</strong>, qui a étudié à l’École Supérieure des Professeurs en Médias à Al-Qubba. Grâce à son expertise étendue et à sa vision aiguë, il a transformé une idée inspirante en une solution tangible, ouvrant la voie à un futur où technologie et innovation vont de pair.</p>
<h2>Notre Avenir</h2>
<p>Bien que nous en soyons encore aux débuts de notre parcours, nous sommes convaincus que l’avenir nous réserve de nombreuses opportunités et défis qui nous pousseront à évoluer continuellement. Nous nous engageons à développer PenguChat et à ajouter de nouvelles fonctionnalités pour améliorer votre expérience de communication.</p>
<p>Merci de faire partie de notre aventure vers l’innovation et la connexion. Nous apprécions votre confiance et votre soutien alors que nous œuvrons pour bâtir un meilleur futur pour la communication digitale.</p>
`;

// دالة تغيير لغة محتوى مودال الشروط والأحكام
function changeModalLanguage() {
const lang = document.getElementById('modal-language-select').value;
const modalContentDiv = document.getElementById('modal-terms-content');
if (lang === 'ar') {
  modalContentDiv.innerHTML = modalArabicContent;
  modalContentDiv.style.direction = 'rtl';
} else if (lang === 'fr') {
  modalContentDiv.innerHTML = modalFrenchContent;
  modalContentDiv.style.direction = 'ltr';
} else {
  modalContentDiv.innerHTML = modalEnglishContent;
  modalContentDiv.style.direction = 'ltr';
}
}

// دالة تغيير لغة محتوى مودال "About Us"
function changeAboutLanguage() {
const lang = document.getElementById('modal-about-select').value;
const aboutContentDiv = document.getElementById('modal-about-content');
if (lang === 'ar') {
  aboutContentDiv.innerHTML = aboutArabicContent;
  aboutContentDiv.style.direction = 'rtl';
} else if (lang === 'fr') {
  aboutContentDiv.innerHTML = aboutFrenchContent;
  aboutContentDiv.style.direction = 'ltr';
} else {
  aboutContentDiv.innerHTML = aboutEnglishContent;
  aboutContentDiv.style.direction = 'ltr';
}
}

// عند النقر على زر "Terms and Conditions" فتح المودال وتعبئة المحتوى افتراضياً باللغة الإنجليزية
document.getElementById("menu-Terms and Conditions").addEventListener("click", function () {
document.getElementById("termsModal").style.display = "block";
document.getElementById("modal-language-select").value = "en";
changeModalLanguage();
});

// عند النقر على زر "About Us" فتح مودال "About Us" وتعبئة المحتوى افتراضياً باللغة الإنجليزية
document.getElementById("menu-About Us").addEventListener("click", function () {
document.getElementById("aboutModal").style.display = "block";
document.getElementById("modal-about-select").value = "en";
changeAboutLanguage();
});

// عند النقر على زر "Download PenguChat" في قسم التحميل فتح مودال تحميل الـ APK
document.getElementById("downloadPenguChat").addEventListener("click", function (e) {
e.preventDefault();
document.getElementById("downloadModal").style.display = "block";
});

// إغلاق مودال الشروط والأحكام عند النقر على رمز الإغلاق
document.querySelector("#termsModal .close").addEventListener("click", function () {
document.getElementById("termsModal").style.display = "none";
});

// إغلاق مودال "About Us" عند النقر على رمز الإغلاق
document.getElementById("aboutClose").addEventListener("click", function () {
document.getElementById("aboutModal").style.display = "none";
});

// إغلاق مودال تحميل الـ APK عند النقر على رمز الإغلاق
document.getElementById("downloadClose").addEventListener("click", function () {
document.getElementById("downloadModal").style.display = "none";
});

// إغلاق المودالات عند النقر خارج محتوى المودال
window.addEventListener("click", function (event) {
const termsModal = document.getElementById("termsModal");
const aboutModal = document.getElementById("aboutModal");
const downloadModal = document.getElementById("downloadModal");
if (event.target == termsModal) {
  termsModal.style.display = "none";
}
if (event.target == aboutModal) {
  aboutModal.style.display = "none";
}
if (event.target == downloadModal) {
  downloadModal.style.display = "none";
}
});


