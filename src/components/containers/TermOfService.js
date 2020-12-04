import React from 'react';
import {
    TosCont, TosBoxTop, TosBoxCont, TosContentCont
} from '../../styles/styles';

const TermOfService = () => {
    return (
        <TosCont>
            <TosBoxTop />
            <TosBoxCont>
                <TosContentCont>
                    <div className="tosTxt" dangerouslySetInnerHTML={{ __html: myHTML }} />
                    <div className="scrollBg"></div>
                </TosContentCont>
            </TosBoxCont>
        </TosCont>
    )
}

const myHTML = `
<h1>Terms of Service</h1><p>Any content purchased in an in-game store will be purchased from Sony Interactive Entertainment Network Europe Limited (“SIENE”) and be subject to PlayStation™Network Terms of Service and User Agreement which is available on the PlayStation™Store. Please check usage rights for each purchase as these may differ from item to item. Unless otherwise shown, content available in any in-game store has the same age rating as the game.</p>
<p>This Terms of Service governs the relationship between you and En Masse Entertainment, Inc., its parents, subsidiaries and affiliates (collectively, ‘En Masse’, ‘we,’ or ‘our’) in relation to:</p>
<p>A. our websites, including without limitation http://www.enmasse.com and any other websites owned or operated by En Masse;</p>
<p>B. any online, desktop, mobile and console games(including but not limited to Xbox games and PlayStation®4 games) and all software, products operated or made available by En Masse (the ‘Games’); and</p>
<p>C. any of our other services, including without limitation any such services accessible via a third party platform, websites (collectively, the ‘Service’). </p>
<p>The Service Privacy Policy (http://www.enmasse.com/privacy-policy), end user license agreement, any supplemental terms provided to you by En Masse are an integral part of this Terms of Service and are incorporated herein by reference.</p>
<h6>1. Ownership and Grant of Use</h6>
<p>The entire contents of the Service, including without limitation all information, material, trademarks, software, video, photographs, graphics, text, music and sound, are owned or licensed by En Masse under applicable laws. En Masse owns rights in the selection, coordination, arrangement and enhancement of such content.</p>
<p>You may not transmit, participate in the transfer or sale, create derivative works from, modify, publish, or in any way exploit, any of the content contained in the Service (including, without limitation, any content that our Service enables you to purchase, download) without the express written permission of En Masse and any other applicable owner. In the event of any permitted copying, redistribution or publication of any content, no changes in or deletion of any author attribution, trademark, or copyright notice may be made. The purchasing or downloading of content from the Service is allowed by you only for your personal use.</p>

<p>You acknowledge that En Masse and/or third-party content providers remain the owners of all content contained in the Service, and that you do not acquire any ownership rights by purchasing, downloading, using or paying fees to acquire licenses to use any content.</p>

<p>As long as you comply with this Terms of Service and it has not been terminated, En Masse grants you a personal, non-commercial, non-exclusive, non-transferable, limited right to enter, use, perform and display our Service and its contents.</p>

<h6>2. User Content</h6>

<p>The Service may incorporates certain communication features such as forums, message boards, chat, messenger-type features, and email that may be provided to registered and unregistered users (collectively, ‘Game Communication Features’). You acknowledge that by using Game Communication Features, you may be exposed to messages, information, data, text, software, graphic files, or other materials, whether in written, verbal, electronic, digital, machine-readable or other form (‘User Content’) that you might find objectionable.</p>

<p>EN MASSE DOES NOT TOTALLY CONTROL USER CONTENT AND DOES NOT GUARANTEE ITS ACCURACY, INTEGRITY OR QUALITY. You understand that any User Content sent through or appearing on the Game Communication Features is the sole responsibility of those persons transmitting such User Content. This means that you, and not En Masse, are entirely responsible for all User Content that you transmit. Under no circumstances will En Masse be liable for any errors or omissions in any User Content or for any loss or damages of any kind incurred as a result of the access to, downloading, viewing, listening, use of or inability to use any User Content sent through or appearing on any Game Communication Features.</p>

<p>En Masse has no obligation to monitor or supervise the Game Communication Features and/or User Content, and expressly disclaims any representation that we will monitor or supervise such features and/or User Content. However, we expressly reserve the right, but not the obligation, in our sole discretion to monitor, screen, edit, block or remove any User Content, in whole or in part, sent through or appearing on any Game Communication Feature and you have no expectation of privacy in any content in any of the Game Communication Features. Without limiting the foregoing, En Masse and its designees shall have the right to block or remove, in whole or in part, any User Content that is in violation of this Terms of Service, is illegal, infringing or otherwise offensive or objectionable. Accordingly, you acknowledge that the Game Communication Features are forums for public and not private communications. YOU AGREE TO INDEMNIFY AND HOLD EN MASSE AND ITS DESIGNEES HARMLESS FROM ANY CLAIM OR DEMAND, INCLUDING REASONABLE ATTORNEYS' FEES, MADE BY ANY THIRD PARTY DUE TO OR ARISING OUT OF YOUR VIOLATION OF THESE TERMS AND CONDITIONS OR YOUR VIOLATION OF ANY RIGHTS OF ANOTHER.</p>

<p>Any and all User Content submitted to En Masse shall be deemed, and shall remain, the property of En Masse from the moment such User Content is created. En Masse shall exclusively own all now known or hereafter existing copyrights and all other intellectual property rights to all User Content of every kind and nature, in perpetuity throughout the world. To the extent that any of the above may be void or unenforceable, you agree that any and all User Content is hereby irrevocably assigned to En Masse, together with all intellectual property rights therein. To the extent any of the User Content is not assignable, by submitting User Content to En Masse, you agree that En Masse shall be irrevocably entitled, directly or indirectly throughout the world and in perpetuity, to modify, adapt, use, reproduce, license, publish, broadcast, perform, sell, translate, create derivative works from and distribute any User Content for any purpose whatsoever, commercial or otherwise, in any medium now known or hereafter devised, without compensation or credit to the provider or author of the User Content. You also give up any claim that any use by En Masse of any User Content violates any of your rights, including but not limited to moral rights, rights of privacy, rights to publicity, proprietary or other rights, and/or rights to credit for the material or ideas set forth therein.</p>

<h6>3. Eligibility</h6>

<p>If you are between the ages of thirteen (13) and eighteen (18), your parent or guardian must complete the registration process, in which case such parent or guardian will take full responsibility for all obligations under this Terms of Service. You represent that you are at least eighteen (18) years of age and are either accepting this Terms of Service on behalf of yourself or on behalf of your minor child. You may not transfer, sell, or share your Account with anyone, unless you are a parent or guardian, in which case you may permit your minor child to use the Account. You are liable for all activities conducted through the Account.</p>

<p>The Children's Online Privacy Protection Act, administered by the Federal Trade Commission, imposes rules regarding the collection of personal information from children. The Service is not directed to children under the age of thirteen (13). If you are under the age of thirteen (13) you may not create an Account and must not provide any personal information to En Masse.</p>

<h6>4. Establishing an Account and Access to the Service</h6>

<p>A. The Service is an on-line or mobile game service that must be played over the Internet or mobile network as provided by En Masse, and you are wholly responsible for acquiring and paying for your own Internet or mobile network access along with all necessary equipment, servicing, repair or correction incurred in maintaining the use of the Service and the related services.</p>

<p>B. A Game account (‘Account’) may be required to access certain features of Game, including the Game Communications Features. If you have questions about Account registration, please visit: Creating and Managing Your En Masse Account.</p>

<p>To create an Account, you must provide your name, date of birth, mailing address and valid email address. You must provide truthful and accurate information. Accounts are available only to adults.</p>

<p>During the registration process, you may be required to provide your login ID (your verifiable email address) and a password (collectively referred to as ‘Login Information’). You may not share the Account or the Login Information with anyone other than as expressly set forth herein. You are responsible for maintaining the confidentiality of the Login Information, and you will be responsible for all uses of the Login Information, whether or not authorized by you. In the event that you become aware of or reasonably suspect any breach of security, including without limitation any loss, theft, or unauthorized disclosure of the Login Information, you must immediately notify En Masse by emailing to us. You are solely responsible for all activity on your Account. You should not reveal your Account password to others. En Masse will not ask you to reveal your password or initiate contact with you asking for answers to your password security questions.</p>

<p>C. Username. In addition to your Login Information, you may be required to select a unique username for use with the Game Communication Features. Your username can be seen by others.</p>

<p>Therefore, if En Masse finds a username to be offensive or improper, it may, in its sole and absolute discretion, change or ask you to change the username, block such user registration, remove the username from all aspects of the Game and Service, and/or suspend or terminate your Account. In particular, you may not use the name of another person, or a name which infringes a third party's trademark, copyright, or other proprietary right. You may not use a name which may mislead others to believe you to be an employee of En Masse, or which En Masse deems at its sole discretion to be vulgar or otherwise offensive. En Masse reserves the right, but not the obligation, in its sole and absolute discretion, to delete or alter any username, terminate or suspend your Account, or terminate any license granted herein, for any reason whatsoever.</p>

<p>Your Username may be deactivated if you do not use it for a long period of time after the date that it was created and En Masse may remove and delete your Username at our sole discretion. We will use reasonable efforts to notify you by email before we delete your Username. If you advise us within five days of the notice that you want to keep your Username active, we will not delete it. If you do not so notify us, your Username will be permanently deleted, along with your User account records, ranks and service information.</p>

<p>NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN, YOU ACKNOWLEDGE AND AGREE THAT YOU SHALL HAVE NO OWNERSHIP OR OTHER PROPERTY INTEREST IN THE ACCOUNT, AND YOU FURTHER ACKNOWLEDGE AND AGREE THAT ALL RIGHTS IN AND TO THE ACCOUNT ARE AND SHALL FOREVER BE OWNED BY AND INURE TO THE BENEFIT OF EN MASSE. En Masse does not recognize the transfer of Accounts or any items incorporated into or part of the Game or Service, including without limitation any characters, game items, EMPs or any other content or information therein (‘Contents’). You may not purchase, sell, gift, trade, or offer to purchase, sell, gift or trade, any Account or any Contents incorporated into or part of the Game or Service, and any such attempt shall be null and void.</p>

<p>D. Specifically, in order to use the Services for Xbox 360 or Xbox One Games, you will need to visit the site and sign in using your Microsoft Xbox Live ID credentials. The Account will be automatically created using your Microsoft Xbox Live ID credentials (e-mail and nick name (gamertag).</p>

<p>To access the Services for PlayStation®4 Games, you need to have a Sony Entertainment Network account.</p>

<h6>5. Paid Services</h6>

<p>A. You may need to pay fees to access and acquire licenses to use certain game items or participate in game activities. You must have an Account and pay applicable fees by using online currency (‘EMP’) to use such game items and participate in these activities. For more information about subscription and other fees for particular services, visit the En Masse Store.</p>

<p>In order to obtain EMPs, you may be required to provide us or a third-party payment service provider designated by En Masse with your credit card information and other information related to any type of payment and transaction. If your use of En Masse's service, purchase of subscription or game items is subject to use or sales tax or fees charged by third party service providers, En Masse or the third-party payment service provider may charge for any such taxes and fees. As the account holder, you are responsible for all charges incurred, including applicable taxes and all purchases made via your Account.</p>

<p>If you leave a balance of EMP unused for a long period of time, we may process your EMP balance in accordance with our legal obligations, including by submitting funds associated with your EMP balance to the appropriate governing body where required by law or charge inactivity fees in accordance with applicable rules and regulations.</p>

<p>YOU UNDERSTAND AND AGREE THAT ANY APPLICABLE FEES AND OTHER CHARGES ARE PAYABLE IN ADVANCE AND ARE NOT REFUNDABLE IN WHOLE OR IN PART.</p>

<p>B. Certain game items have an expiration date, while others have no expiration date. Each game item that you acquire will be included in your Account until the earlier of that game item's expiration date, if applicable or your Account's expiration or termination date, or such date when the service ends.</p>

<p>C. En Masse reserves the right to change our fees or billing methods at any time. If any change is unacceptable to you, you may terminate your Account but En Masse will not refund any fees that may have accrued to your Account before your termination of your Account and En Masse will not prorate fees for any subscription or game items, which has not been expired before the termination.</p>

<p>REGARDLESS OF THE CONSIDERATION OFFERED OR PAID IN EXCHANGE FOR GAME ITEMS, YOU DO NOT HAVE ANY OWNERSHIP RIGHTS IN THE GAME ITEMS.</p>

<p>D. IF YOU ARE PLAYING OUR GAMES ON EXTERNAL PLATFORMS SUCH AS MICROSOFT XBOX, PLAYSTATION®4 SYSTEM, APPLE IOS OR GOOGLE ANDROID, YOU MUST ALSO COMPLY WITH ALL TERMS AND CONDITIONS SET BY THOSE THIRD PARTY PLATFORMS. THE CHARGING AND BILLING IN SUCH GAMES ARE SUBJECT TO RULES OF THE THOSE PLATFORMS. EN MASSE ENTERTAINMENT DISCLAIMES ANY LIABILITY OF ANY NATURE FOR SUCH PLATFORMS’ ACTIONS.</p>

<h6>6. Consent to Use of Data and Public Display</h6>

<p>For purposes that En Masse deems necessary, including but not limited to facilitating technical protection measures or providing software updates, content, support and other services to you, you agree that En Masse or its agents may collect, use, store and transmit technical and related information that identifies your machine (including an Internet protocol address and machine ID), operating system, application software, and peripheral hardware. You agree En Masse and its agents may also use this information in the aggregate, in a form which does not personally identify you, to improve its products and services and may share anonymous aggregate data with third parties.</p>

<p>You agree that En Masse and its agents may collect, use, store, transmit, and publicly display statistical data regarding the game play (including scores, rankings and achievements) or identify content that is created and shared by you and other users. Data that personally identifies you may be collected, used, stored and transmitted in accordance with the privacy policy published at http://www.enmasse.com/privacy-policy.</p>

<h6>7. Service Interruptions and Changes to the Service</h6>

<p>En Masse reserves the right to interrupt all or any aspect of the Service from time to time on a regularly scheduled basis or otherwise with or without prior notice in order to perform maintenance. You agree that En Masse will not be liable for any interruption of the Service, delay or failure to perform resulting from any causes whatsoever. You acknowledge that the Service may be interrupted for reasons beyond the control of En Masse, and En Masse cannot guarantee that you will be able to access the Service or your Account whenever you may wish to do so. En Masse has the right at any time for any reason or no reason to change and/or eliminate any aspect of the Service as it sees fit in its sole discretion.</p>

<h6>8. Links to Third-Party Sites</h6>

<p>En Masse may include hyperlinks to web sites operated by third parties including payment service providers and other content providers. Those sites may collect data or solicit personal information from you. En Masse does not control such web sites, and is not responsible for their content, privacy policies, or for the collection use or disclosure of any information those sites may collect.</p>

<h6>9. Patches and Updates</h6>

<p>From time to time in its sole discretion, En Masse may deploy or provide patches, updates and modifications to the Service that must be installed for you to continue to play Game. En Masse may update the Game remotely including without limitation the Game Client residing on your machine, without your knowledge and you hereby grant En Masse your consent to deploy and supply such patches, updates and modifications.</p>

<h6>10. Termination and Suspension</h6>

<p>You or En Masse may terminate this Terms of Service and your Account at any time. You may terminate this Terms of Service at any time by terminating all your registered. En Masse can terminate this Terms of Service by asking you to stop using the Service, and, at En Masse's sole and absolute discretion, by preventing your access to the Service and/or your Account. Upon termination of this Terms of Service, you will have no further rights to use the Service.</p>

<p>Your only right and remedy with respect to any dissatisfaction with the Service or any content therein is to terminate this Terms of Service and your Account and to cease using any services available through the Service, including Game Communication Features. You acknowledge and agree that you are not entitled to any refund for any amounts that you paid before the termination. En Masse reserves the right to collect fees, surcharges or costs incurred before you terminate your Account or a subscription. You are also responsible for any amounts owed to third-party vendors or content providers before your termination. Any delinquent or unpaid fees and other unresolved issues with En Masse's service must be settled before you establish a new Account.</p>

<p>Without limiting the foregoing, En Masse shall have the right to terminate this Terms of Service with you, effective immediately, and/or terminate or temporarily suspend your access to your Account and/or all or any part of the Service, without notice, in the event of any conduct by you which En Masse, in its sole and absolute discretion, considers to be unacceptable, or for conduct that En Masse believes is a violation of the terms and conditions contained herein or any other policies of En Masse, or for other conduct which En Masse believes, in its sole and absolute discretion, is harmful to En Masse, other Service users, or third parties. En Masse reserves the right to deny any account registration and to deny access to the Service to any individual.</p>

<p>The provisions of Sections 1, 2, 7, 11, 12 and 14 shall survive any termination of this Terms of Service.</p>

<h6>11. Changes to Terms of Service</h6>

<p>En Masse reserves the right, at its sole and absolute discretion, to change, modify, add to, supplement or delete any of the terms and conditions of this Terms of Service at any time, including without limitation access policies, the availability of any feature of the Service, hours of availability, content, data, software or equipment needed to access the Service, effective with or without prior notice; provided, however, that En Masse intends to disclose material changes (as determined in En Masse's sole and absolute discretion) to you through any of one or a combination of: a patch process, or by email, postal mail, website posting, or pop-up screen. If you cannot comply with changes to this Terms of Service, or such changes are unacceptable to you, you must not use or access the Service and your Account. Continuing to access or use the Service following any revision to this Terms of Service constitutes your complete and irrevocable acceptance of any and all such changes. En Masse may change, modify, suspend, or discontinue any aspect of the Service at any time. En Masse may also impose limits on certain features or restrict your access to parts or all of the Service without notice or liability. If you do not agree to any new terms, or to any of the terms in this Terms of Service, your only remedy is to not access or use the Service and to cancel your Account.</p>

<h6>12. Notice to California Residents</h6>

<p>Under California Civil Code Section 1789.3, users from California are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 400 R Street, Suite 1080, Sacramento, California 95814, or by telephone at (916) 445-1254 or (800) 952-5210.</p>

<h6>13. Miscellaneous</h6>

<p>If any provision of this Terms of Service shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this Terms of Service and shall not affect the validity and enforceability of any remaining provisions. This Terms of Service is the complete and exclusive statement of the agreement between you and En Masse concerning the Service, and this Terms of Service supersedes any prior or contemporaneous agreement, either oral or written, and any other communications with regard thereto between you and En Masse; provided, however that this Terms of Service is in addition to, and does not replace or supplant the Privacy Policy, any applicable end user license agreement, and any supplemental agreement. This Terms of Service may only be modified as set forth herein. The section headings used herein are for reference only and shall not be read to have any legal effect.</p>

<p>YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THE END USER LICENSE AGREEMENT AND TERMS OF SERVICE AND AGREE THAT YOUR USE OF THE SERVICE IS BOUND BY THE TERMS AND CONDITIONS ABOVE.</p>
`;
export default TermOfService;