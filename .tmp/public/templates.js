angular.module('templates-app', ['about/index.tpl.html', 'donate/index.tpl.html', 'home/index.tpl.html', 'veterans/index.tpl.html', 'volunteer/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\">Continuing the Mission</h1>\n" +
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
    "                <p style=\"color:white\">Many Veteran advocacy organizations and mental health advocates have strongly supported the use of Assistance Dogs to aid in the ongoing recovery of PTS. These uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
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
    "<section id=\"about-2\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "              <h4>{{date | date: 'yyyy'}} <a href=\"/\">Continuing the Mission</a></h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<!--\n" +
    "Chairman: LTC(ret) Jim Reed\n" +
    " \n" +
    "LTC(ret) Jim Reed enlisted in the Army in October of 1983. After completing basic and advanced individual training he was assigned to the 10th Special Forces Group (Airborne) at Ft. Devens, Massachusettes. Upon completing his initial enlistment, he matriculated out of the Army and attended the University of Arizona, and served in the 19th Special Forces Group (Airborne) as an Army ROTC. He earned his commisiion as a Distinguished Military Graduate in 1992 after graduating with honors with a Bachelor of Science in Nursing.\n" +
    " \n" +
    "Jim held various assignments in the Army Medical Department including Intensive Care Nurse and Flight Nurse in the Army Burn Unit. He was accepted to the prestigious US Army Graduate Program in Anesthesia Nursing, and graduated the program Distinguished Graduate in 2000. Afterward he was assigned to the 126th Forward Surgical Team at Ft. Hood, Texas. He was then selected to join the ranks of an elite medical unit that supported Special Mission Units in Counter-Terrorist Operations in 2001. While a member of this elite unit he deployed 9 times to war for over 1500 days in a combat zone. He participated in hundreds of combat missions and administered care to hundreds of casualties. Through his service he earned the Legion of Merit, 5 Bronze Stars, 2 Air Medals, and many other awards and decorations.\n" +
    " \n" +
    "After retiring from the Army in 2011, Jim became involved in veteran's advocacy. Specifically, in the fight against veteran's suicide. As a member of Iraq and Afghanistan Veterans of America, he lobbied the US House and Senate in support of the Clay Hunt Suicide Prevention for America's Veterans Act, which the President signed into law in 2014. He was featured on PBS frontline speaking to the problems of opioid malprescription and addiction among veterans, and the Baltimare Sun. He has appearerd as a guest in support of veterans causes on the CBS Evening News, Fox News, and The Megyn Kelly show.\n" +
    " \n" +
    "Jim currently works at Firsthealth Moore Regional Hospital in Pinehurst, NC, as a Nurse Anesthesist in the Department of Anesthesia Services. He is the Duke University Nurse Anesthesia Program Clinical Coordinator, and is also in the Doctor of Nursing Practice program at Duke University.\n" +
    " \n" +
    "He has been married to his wife Holly, who is an Emergency Department Nurse for 25 years. They have 2 chldren, their son Nick is an Army Officer in the 82nd Airborne Division and their daughter Heather, is a 3rd year Cadet at the United States Military Academy at West Point.\n" +
    "-->\n" +
    " \n" +
    " \n" +
    "<!--\n" +
    "Lieutenant Colonel (Retired) Sharon Henderson has 30 years of extensive experience and connections in the Department of Defense (DOD), the Veterans Administration and Military Health Systems (MHS). She enlisted in the US Army Reserves between her Junior and Senior years of high school and later deployed to Desert Shield/Storm. She then went on to be commissioned as a Second Lieutenant in the Medical Service Corps when graduated from Montana State University in 1993. While she was still active duty she was able to earn a Masters Degree in Health Administration from Baylor University in 2001. \n" +
    "​\n" +
    "Ms. Henderson served meritoriously in various Medical Logistics, Health Care Administration and Wounded Warrior programs. She is most proud of her time from 2006 - 2013 when she served the Special Operations Command community as a Wounded Warrior and Policy Advocate. Sharon has been a Fellow in the American College of Healthcare Executives since 2001.\n" +
    "​\n" +
    "Sharon has received numerous military awards and decorations to include the Legion of Merit, 5 Meritorious Service Medals, 2 Army Commendation Medals and multiple campaign medals. Governor Rick Perry also named her a \"Yellow Rose of Texas\" in 2010.\n" +
    "​-->\n" +
    "​\n" +
    " \n" +
    "<!-- \n" +
    "Mr. Byron Shrader, a senior Department of the Army civilian (GS) is currently serving as the Deputy Director of the Commander's Initiative Group (CIG) at the Joint Special Operations Command (JSOC), performing a broad spectrum of duties tied to the commanding General's strategic engagements, initiatives and special projects. Prior to this role Mr. Shrader served for four years as the Deputy Director and Senior Operations analyst for the JSOC Center for Counterterrorism Studies.\n" +
    " \n" +
    "His extensive time in the Special Operations community encompasses having served as a Senior Non-Commissioned officer (NCO) in a variety of assignments including: Chief of Current Operations for a Special Operations Task Force, Operations NCO, Team Sergeant, Special Forces Medical Sergeant and Special Forces Intelligence Sergeant. He has worked in the 5th Special Forces Group, 7th Special Forces Group, the 96th Civil Affairs Battalion, the JFK Special Warfare Center and School and a Special Mission Unit.\n" +
    " \n" +
    "His many assignments have included several combat tours and deployments to dozens of countries to conduct a variety of highly complex missons in remote and austere environments. He has numerous awards and decorations to include: The Bronze Star Medal, the Army Commendation Medal (V device/valor), the Special Forces Tab, the Ranger Tab, the Master Parachutist Badge, and the Combat Medical Badge. He has attended numerous schools and training courses while earning a Bachelor of Science and Master of Science degress.\n" +
    " \n" +
    "Mr. Shrader entered the military in 1983 and has earned multiple college degrees. He is married to the former Esther Herzog and has two sons: Tim, a 1st Lt in the USMC, and Justin who is enrolled in college pursuing a career in the information technology field.\n" +
    "-->\n" +
    " \n" +
    " \n" +
    "<!--\n" +
    "MSG(ret) Fred Giltzow enlisted in the Army in March of 1970. After completing basic and advanced individual training and basic airborne school he volunteered and was selected to attend the Special Forces Qualification Course. He graduated as a weapons sergeant. Fred spent thirteen months in Vietnam, he was assigned to Military Advisory Command-Vietnam (MAV-V). While in Vietnam he was part of a team of Special Forces Advisors that organized, equipped and trained Khmer National Armed Forces (FANK). Through his service he was awarded the Combat Infantry Badge, Master Parachutist Badge, Special Forces Tab and BronzeStar.\n" +
    " \n" +
    "Upon his return to the United States, Fred joined the Caldwell Police Department. In 1983 he joined the 11th Special Forces Group(A). In 1990, he was assigned to the Inactive Ready Reserve (IRR). During this time he completed the Special Forces Operations Intelligence Course. Every year Fred would return to the Special Forces Weapons Committee and train Special Forces weapons students on various types of weapons at Ft. Bragg. While on the police department, he was selected to attend the FBI National Academy in Quantico, VA. He was the police department Range Master, in charge of all firearms training for the department. Fred was promoted to Sergeant and spent ten years in the detective bureau.\n" +
    " \n" +
    "After September 11, 2001, Fred was called back to active duty. He was assigned to the Army S.E.R.E. School at Camp Mackall. He spent his two years of active duty on the Survival Committee. Upon his promotion to MSG, he became the NCOIC of Survival. Upon completion of his active duty he was asked to return to Survival in a civilian capacity. Fred retired from the police department after serving thirty years. He had attained the rank of Lieutenant.\n" +
    " \n" +
    "He and his wife Carolyn moved to Pinehurst in 2004. Fred continued to instruct with the survival Committee until he retired in 2012. Fred and Carolyn have been married for fourty-four years. They have two sons, Jeffrey and Hunter. Jeffrey is an officer assigned to the 18th Airborne Corps. Hunter is a Brew Master. \n" +
    "-->\n" +
    " \n" +
    " \n" +
    "<!--\n" +
    "Felix (Buze) Blumhardt served in the United States Army as a Licensed Clinical Social Worker, providing mental health and Family Advocacy services to veterans and their families. Following active duty, Felix earned her PhD in Social Work and taught at the University of South Carolina , University of Kansas, and University of Hawaii-Manoa, where she worked with military and civilian students and faculty. Currently, she is the Director of Evaluation with an evaluation firm that provides evaluation, consulting, and grant development services to schools, universities, and non-profits in the southeasern United States. Felix previously served as a founding member of the Stryker Brigade Memorial Association, which ensures that Stryker Brigade veterans who are killed in action are memorialized in honor of their sacrifice. Felix is passionate about serving veterans and their families, amd is thrilled to support Continuing The Mission in its endeavor to make a difference in the lives of those who have served.\n" +
    "-->\n" +
    "\n" +
    " \n" +
    "<!--\n" +
    "Suzy Lutz has been a military spouse for 29 years. She graduated from Florida State University with a B.S. in Accounting and became a Certified Public Accountant. After a career in public and government accounting and running her own dog obedience school, she decided to devote more time to raising her two boys. Subsequently, she worked as a prechool teacher for 15 years, held various volunteer positions at the Emmanuel Episcopal Church, served on the Episcopal Day School Board, and served as a Board Member for Boy Scout Troop 808 all while her husband was regularly deploying in Southwest Asia. Suzy has trained dogs in obedience and agility for 28 years, has qualified for the AKC National Agility Championships for the last three years running, and has placed as high as third in the NADAC National Agility Chjampionships. Suzy brings a passion for dogs and veterans to her service with Continuing The Mission. \n" +
    "-->\n" +
    " \n" +
    "<!--\n" +
    "Esther's love of dogs and desire to work with an organization that focuses on their uniqueness and their incredible skills and abilities led her to seek out Continuing The Mission in May 2016 and is thrilled to support an organization that works to help those in need. She decided to leave her position as a SR. Project Finance Business Partner within Pharma/Clinical Research industry in order to take a sabbatical to devote more time to her passions, helping people and working with dogs.\n" +
    "​\n" +
    "Esther has been a military spouse for 19 years. She attended Campbell University, graduating with a B.S. in Business Adminstration, summa cum laude and continued her education and attained her MBA in 2009. In her previous role(s) she provided direct support in all things financial to research projects, spread across several continents with a portfolio of projects totalling $500 million. Esther has performed similar roles in several fortune 500 companies over the past 18 years.\n" +
    "​\n" +
    "Esther is an avid dog trainer and enjoys teaching beginner dog training classes at a local training facility and has been participating in agility competitions around the country for five years. She is the proud owner of three Mini Australian Shedherds and has qualified for the AKC Agility Inviationals to compete.\n" +
    "​\n" +
    "She is the mother of two sons. Tim, a Captain in the Marine Corps Aviation and Justin, who is workng at a commercial construction firm and pursuing his education.\n" +
    "-->\n" +
    " \n" +
    "<!-- \n" +
    "Secretary: Byron Shrader\n" +
    "Treasurer: Sharon Henderson\n" +
    "Board Member: Felix Blumhardt\n" +
    "Support Staff\n" +
    "Executive Director-Suzy Lutz\n" +
    "Deputy Director-Esther Shrader\n" +
    "All of our Board Members and Support Staff are volunteers\n" +
    "Board Member: Fred Gilzow\n" +
    "-->\n" +
    "");
}]);

angular.module("donate/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("donate/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\">Continuing the Mission</h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h2 style=\"color:black\">Donate</h2>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Many Veteran advocacy organizations and mental health advocates have strongly supported the use of Assistance Dogs to aid in the ongoing recovery of PTS. These uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Donate Form</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-2\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "              <h4>{{date | date: 'yyyy'}} <a href=\"/\">Continuing the Mission</a></h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<header class=\"intro\">\n" +
    "    <div class=\"intro-body\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                    <img class=\"intro-img\" src=\"images/ctm3.png\">\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p class=\"intro-text\">Continuing the Mission</p>\n" +
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
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h1 style=\"color:black\">Continuing the Mission</h1>\n" +
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
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Many Veteran advocacy organizations and mental health advocates have strongly supported the use of Assistance Dogs to aid in the ongoing recovery of PTS. These uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/donate\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Donate</h1></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/volunteer\"><h1 style=\"color:black;width:100%\" class=\"btn btn-default\">Volunteer</h1></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <a href=\"/veterans\">\n" +
    "                <h1 style=\"color:black;width:100%\" class=\"btn btn-default\">For Veterans</h1>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <img style=\"width:100%;text-align:center\" src=\"images/mission.png\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-2\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-10\">\n" +
    "                <h4>{{date | date: 'yyyy'}} <a href=\"/\">Continuing the Mission</a></h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-2\">\n" +
    "                <h4>\n" +
    "                    <a href=\"https://www.facebook.com/ContinuingTheMission/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "                    <a href=\"https://twitter.com/k9ctm\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-google\"></i></a>\n" +
    "                    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                </h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("veterans/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("veterans/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\">Continuing the Mission</h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h1 style=\"color:black\">Veterans</h1>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Many Veteran advocacy organizations and mental health advocates have strongly supported the use of Assistance Dogs to aid in the ongoing recovery of PTS. These uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Veteran Application</h2>\n" +
    "\n" +
    "            <p>\n" +
    "            Thank you for your interest in acquiring a PTSD Service Dog through Continuing the Mission (CTM).\n" +
    "            We are deeply committed to providing service dogs to veterans for the purpose of improving their lives\n" +
    "            through support. We pride ourselves on optimal veteran-service dog matches and, to that end, we have\n" +
    "            several criteria that must be met in order to be considered for placement. The following requirements\n" +
    "            must be met in order for service dog placement to be considered:\n" +
    "            Diagnosis of PTSD by a licensed Behavioral Health Provider*;\n" +
    "            Active treatment with a licensed Behavioral Health Provider for at least three months*;\n" +
    "            Commitment towards continued engagement in treatment for at least 6 months after pairing;\n" +
    "            Ability to physically and financially care for a dog, and have resided at the same location for six\n" +
    "            months;\n" +
    "            Ability to travel to Southern Pines, NC, for training and pairing with a service dog;\n" +
    "            In addition to these requirements, we will conduct an assessment of your suitability to provide a stable\n" +
    "            home environment for your service dog. We strongly believe service dogs can be extremely beneficial\n" +
    "            for Veterans with PTSD, however they are not a substitute for continued behavioral health treatment.\n" +
    "            You are ineligible for a service dog through CTM if you have been hospitalized for mental health\n" +
    "            reasons within the last 6 months, carry a diagnosis of psychosis, delusions, dementia, or have active\n" +
    "            alcohol/substance dependence. Additionally, active suicidal ideation, homicidal ideation, history of\n" +
    "            aggressive or violent behaviors, or cognitive disabilities that would preclude safety of the service dog\n" +
    "            are also considered as disqualifying.\n" +
    "            Our PTSD service dogs are trained to perform the following: blocking (standing in between you and\n" +
    "            other people in a non-threatening manner), turning on a light, picking up an object, and sweeping an\n" +
    "            empty house for intruders.\n" +
    "            After reviewing the criteria, please let us know if you would like to begin the evaluation process by\n" +
    "            contacting us at ContinuingtheMission.org. Please note that If you are currently ineligible (i.e. not in\n" +
    "            treatment, haven’t lived in the same residence for 6 months, etc.), you may become eligible if your\n" +
    "            circumstances change, and are welcome to reapply at that time.\n" +
    "            </p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-2\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "              <h4>{{date | date: 'yyyy'}} <a href=\"/\">Continuing the Mission</a></h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("volunteer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("volunteer/index.tpl.html",
    "<section id=\"about\" class=\"container content-section\">\n" +
    "  <div class=\"container\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 style=\"color:black\">Continuing the Mission</h1>\n" +
    "            <p>Forging partners with purpose</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h1 style=\"color:black\">Volunteer</h1>\n" +
    "            <p>Improving the quality of life for Veterans and their families with recognized needs, by pairing them with uniquely trained canine partners.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-1\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h2>Forging partners with purpose</h2>\n" +
    "                <p style=\"color:white\">Many Veteran advocacy organizations and mental health advocates have strongly supported the use of Assistance Dogs to aid in the ongoing recovery of PTS. These uniquely trained partners provide companionship, a feeling of security and safety, and can aid in re-integration into everyday life.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"contact\" class=\"container content-section\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h2>Volunteer Info</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</section>\n" +
    "\n" +
    "<section id=\"about-2\" class=\"content-section\">\n" +
    "    <div class=\"about-section\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "              <h4>{{date | date: 'yyyy'}} <a href=\"/\">Continuing the Mission</a></h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);
