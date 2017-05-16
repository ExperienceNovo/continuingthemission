angular.module('templates-app', ['about/index.tpl.html', 'donate/index.tpl.html', 'footer/index.tpl.html', 'home/index.tpl.html', 'nav/index.tpl.html', 'veterans/index.tpl.html', 'volunteer/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div ng-include=\"'nav/index.tpl.html'\"></div>\n" +
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\"><a href=\"/\">Continuing the Mission</a></h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <h2 style=\"color:black\">Our Mission</h2>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <h2 style=\"color:black\">Training</h2>\n" +
    "            <p>Training is very important, but there will also be times when we need help giving our dogs a little extra TLC. Bathing, walking, and petting are ways you can help us shape our future service dogs into faithful companions. If you have time in your schedule and would like to help care for our service dogs in training, please let us know!</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <h2 style=\"color:black\">Events</h2>\n" +
    "            <p>Each Continuing the Mission event has many different facets in order to be successful. Many hands make light work, and there is a role for everyone. This is also a great way to see what goes on behind the scenes of providing a service dog. Think of it like having a Backstage Pass. Help us get our message out.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Veteran organizations and mental health advocates strongly support the use of Assistance Dogs to aid in the ongoing recovery of PTS.<br> Our uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>The Team</h2>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Jim Reed</h3>\n" +
    "                <p>LTC(ret) Jim Reed enlisted in the Army in October of 1983. After completing basic and advanced individual training he was assigned to the 10th Special Forces Group (Airborne) at Ft. Devens, Massachusettes. Upon completing his initial enlistment, he matriculated out of the Army and attended the University of Arizona, and served in the 19th Special Forces Group (Airborne) as an Army ROTC. He earned his commisiion as a Distinguished Military Graduate in 1992 after graduating with honors with a Bachelor of Science in Nursing.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Sharon Henderson</h3>\n" +
    "                <p>Sharon Henderson has 30 years of extensive experience and connections in the Department of Defense (DOD), the Veterans Administration and Military Health Systems (MHS). She enlisted in the US Army Reserves between her Junior and Senior years of high school and later deployed to Desert Shield/Storm. She then went on to be commissioned as a Second Lieutenant in the Medical Service Corps when graduated from Montana State University in 1993. While she was still active duty she was able to earn a Masters Degree in Health Administration from Baylor University in 2001.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Byron Shrader</h3>\n" +
    "                <p>A senior Department of the Army civilian (GS) is currently serving as the Deputy Director of the Commander's Initiative Group (CIG) at the Joint Special Operations Command (JSOC), performing a broad spectrum of duties tied to the commanding General's strategic engagements, initiatives and special projects. Prior to this role Mr. Shrader served for four years as the Deputy Director and Senior Operations analyst for the JSOC Center for Counterterrorism Studies.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Fred Giltzow</h3>\n" +
    "                <p>MSG(ret) Fred Giltzow enlisted in the Army in March of 1970. After completing basic and advanced individual training and basic airborne school he volunteered and was selected to attend the Special Forces Qualification Course.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Felix Blumhardt</h3>\n" +
    "                <p>Felix (Buze) Blumhardt served in the United States Army as a Licensed Clinical Social Worker, providing mental health and Family Advocacy services to veterans and their families. Following active duty, Felix earned her PhD in Social Work and taught at the University of South Carolina , University of Kansas, and University of Hawaii-Manoa, where she worked with military and civilian students and faculty.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h3 style=\"color:black\">Esther Shrader</h3>\n" +
    "                <p>Esther's love of dogs and desire to work with an organization that focuses on their uniqueness and their incredible skills and abilities led her to seek out Continuing The Mission in May 2016 and is thrilled to support an organization that works to help those in need. She decided to leave her position as a SR. Project Finance Business Partner within Pharma/Clinical Research industry in order to take a sabbatical to devote more time to her passions, helping people and working with dogs.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("donate/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("donate/index.tpl.html",
    "<div ng-include=\"'nav/index.tpl.html'\"></div>\n" +
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\"><a href=\"/\">Continuing the Mission</a></h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h2 style=\"color:black\">Donate</h2>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--slideshow etc-->\n" +
    "\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Veteran organizations and mental health advocates strongly support the use of Assistance Dogs to aid in the ongoing recovery of PTS.<br> Our uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Donate Form</h2>\n" +
    "\n" +
    "            <!--paypal-->\n" +
    "            <form name=\"_xclick\" action=\"https://www.paypal.com/yt/cgi-bin/webscr\" method=\"post\">\n" +
    "                <input type=\"hidden\" name=\"cmd\" value=\"_xclick\">\n" +
    "                <input type=\"hidden\" name=\"business\" value=\"me@mybiz.com\">\n" +
    "                <input type=\"hidden\" name=\"item_name\" value=\"Team In Training\">\n" +
    "                <input type=\"hidden\" name=\"currency_code\" value=\"USD\">\n" +
    "                <input type=\"hidden\" name=\"amount\" value=\"25.00\">\n" +
    "                <input type=\"image\" src=\"http://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif\" border=\"0\" name=\"submit\" alt=\"Make payments with PayPal - it's fast, free and secure!\">\n" +
    "            </form>\n" +
    "\n" +
    "            <p>Continuing the Mission is a nonprofit exempt from federal income tax under Internal Revenue Code (IRC) Section 501(c)(3). Our Employer Identification Number is: 81-2341050</p>\n" +
    "\n" +
    "            <h4>TOGETHER WE MAKE A DIFFERENCE</h4>\n" +
    "\n" +
    "            <!--estate planning etc?-->\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<section id=\"about-2\" class=\"content-section\" ng-controller=\"FooterCtrl\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-xs-10\">\n" +
    "                <h4>{{date | date: 'yyyy'}} <a href=\"/\">Continuing The Mission</a></h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2\">\n" +
    "                <h4>\n" +
    "                    <a href=\"https://www.facebook.com/ContinuingTheMission/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "                    <a href=\"https://twitter.com/k9ctm\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                    <!--<a href=\"#\" target=\"_blank\"><i class=\"fa fa-google\"></i></a>\n" +
    "                    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>-->\n" +
    "                </h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div ng-include=\"'nav/index.tpl.html'\"></div>\n" +
    "<header class=\"intro\">\n" +
    "    <div class=\"intro-body\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                    <img class=\"intro-img\" src=\"images/ctm1.png\">\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p class=\"intro-text\">Continuing The Mission</p>\n" +
    "                    <!--play video-->\n" +
    "                    <a href=\"#about\" class=\"btn btn-circle page-scroll\" du-smooth-scroll>\n" +
    "                        <i class=\"fa fa-angle-double-down animated\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div style=\"height:150px;\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h1 style=\"color:black\">Continuing The Mission</h1>\n" +
    "                <p>Forging partners with purpose</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2 style=\"color:black\">Our Mission</h2>\n" +
    "                <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2 style=\"color:black\">Training</h2>\n" +
    "                <p>Training is very important, but there will also be times when we need help giving our dogs a little extra TLC. Bathing, walking, and petting are ways you can help us shape our future service dogs into faithful companions. If you have time in your schedule and would like to help care for our service dogs in training, please let us know!</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2 style=\"color:black\">Events</h2>\n" +
    "                <p>Each Continuing the Mission event has many different facets in order to be successful. Many hands make light work, and there is a role for everyone. This is also a great way to see what goes on behind the scenes of providing a service dog. Think of it like having a Backstage Pass. Help us get our message out.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <a href=\"/about\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Learn More</h1></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"height:150px;\"></div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Veteran organizations and mental health advocates strongly support the use of Assistance Dogs to aid in the ongoing recovery of PTS.<br> Our uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <a href=\"#contact\" class=\"btn btn-circle page-scroll\" du-smooth-scroll>\n" +
    "                        <i class=\"fa fa-angle-double-down\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div style=\"height:150px;\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <a href=\"/donate\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <img style=\"width:100%;text-align:center\" src=\"images/donations.png\">\n" +
    "                <h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Donate</h1>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <a href=\"/volunteer\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <img style=\"width:100%;text-align:center\" src=\"images/volunteer.png\">\n" +
    "                <h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Volunteer</h1>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <a href=\"/veterans\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <img style=\"width:100%;text-align:center\" src=\"images/mission.png\">\n" +
    "                <h1 style=\"color:black;width:100%\" class=\"btn btn-default\">For Veterans</h1>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"height:150px;\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<div ng-controller=\"NavCtrl\" class=\"navbar navbar-fixed-top\" role=\"navigation\" style=\"background-color:white\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\" style=\"background-color:black\"></span>\n" +
    "                <span class=\"icon-bar\" style=\"background-color:black\"></span>\n" +
    "                <span class=\"icon-bar\" style=\"background-color:black\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"/\">Continuing The Mission</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li><a href=\"/about\">About</a></li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li><a href=\"/donate\">Donate</a></li>\n" +
    "                <li><a href=\"/veterans\">Veterans</a></li>\n" +
    "                <li><a href=\"/volunteer\">Volunteer</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("veterans/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("veterans/index.tpl.html",
    "<div ng-include=\"'nav/index.tpl.html'\"></div>\n" +
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\"><a href=\"/\">Continuing the Mission</a></h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h1 style=\"color:black\">Veterans</h1>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <!--slideshow etc-->\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Veteran organizations and mental health advocates strongly support the use of Assistance Dogs to aid in the ongoing recovery of PTS.<br> Our uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Veteran Application</h2><hr>\n" +
    "\n" +
    "            <p>Thank you for your interest in acquiring a PTSD Service Dog through Continuing the Mission (CTM).</p>\n" +
    "\n" +
    "            <p>We are deeply committed to providing service dogs to veterans for the purpose of improving their lives\n" +
    "            through support. We pride ourselves on optimal veteran-service dog matches and, to that end, we have\n" +
    "            several criteria that must be met in order to be considered for placement.</p>\n" +
    "\n" +
    "            <form>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">First Name</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Last Name</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Address</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"address\" placeholder=\"Address\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Phone Number</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"phoneNumber\" placeholder=\"Phone Number\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Email</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <p><input type=\"checkbox\" name=\"PTSD\" value=\"PTSD\"> Diagnosis of PTSD by a licensed Behavioral Health Provider</p>\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Active treatment with a licensed Behavioral Health Provider for at least three months</p>\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Commitment towards continued engagement in treatment for at least 6 months after pairing</p>\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Ability to physically and financially care for a dog, and have resided at the same location for six months</p>\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Ability to travel to Southern Pines, NC, for training and pairing with a service dog</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <p>In addition to these requirements, we will conduct an assessment of your suitability to provide a stable\n" +
    "                home environment for your service dog. We strongly believe service dogs can be extremely beneficial\n" +
    "                for Veterans with PTSD, however they are not a substitute for continued behavioral health treatment.</p>\n" +
    "\n" +
    "                <p>You are ineligible for a service dog through CTM if you have been hospitalized for mental health\n" +
    "                reasons within the last 6 months, carry a diagnosis of psychosis, delusions, dementia, or have active\n" +
    "                alcohol/substance dependence. Additionally, active suicidal ideation, homicidal ideation, history of\n" +
    "                aggressive or violent behaviors, or cognitive disabilities that would preclude safety of the service dog\n" +
    "                are also considered as disqualifying.</p>\n" +
    "\n" +
    "                <p>Our PTSD service dogs are trained to perform the following: blocking (standing in between you and\n" +
    "                other people in a non-threatening manner), turning on a light, picking up an object, and sweeping an\n" +
    "                empty house for intruders.</p>\n" +
    "\n" +
    "                <p>After reviewing the criteria, please let us know if you would like to begin the evaluation process by\n" +
    "                contacting us at ContinuingtheMission.org. Please note that If you are currently ineligible (i.e. not in\n" +
    "                treatment, haven’t lived in the same residence for 6 months, etc.), you may become eligible if your\n" +
    "                circumstances change, and are welcome to reapply at that time.</p>\n" +
    "\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\" style=\"width:100%\">Submit</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("volunteer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("volunteer/index.tpl.html",
    "<div ng-include=\"'nav/index.tpl.html'\"></div>\n" +
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\"><a href=\"/\">Continuing the Mission</a></h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h1 style=\"color:black\">Volunteer</h1>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--slideshow etc-->\n" +
    "\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Veteran organizations and mental health advocates strongly support the use of Assistance Dogs to aid in the ongoing recovery of PTS.<br> Our uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Volunteer Info</h2><hr>\n" +
    "\n" +
    "            <form>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">First Name</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Last Name</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Address</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"address\" placeholder=\"Address\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Phone Number</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"phoneNumber\" placeholder=\"Phone Number\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"\">Email</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n" +
    "                </div>\n" +
    "\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Foster A Dog</p>\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Volunteer at an event</p>\n" +
    "                <p><input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> Volunteer for dog care</p>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\" style=\"width:100%\">Submit</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);
