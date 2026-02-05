import React, { useState, useEffect, ChangeEvent } from "react";
import "./Popup.css";

interface PopupProps {
  show: boolean;
  onClose: () => void;
}

interface ApiResponse {
  message?: string;
}

const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
const [msg, setMsg] = useState<string>("");

const [phonePlaceholder, setPhonePlaceholder] = useState<string>(
  "Enter 7–12 digit number"
);

const [phonePattern, setPhonePattern] = useState<string>(
  "^[0-9]{7,12}$"
);


  useEffect(() => {
    fetch("https://getnos.io/Algo/main.php")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        if (data?.message) {
          setMsg(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!show) return null;

  // Handle country code change
const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;

  if (value === "+971") {
    // UAE: 7–12 digits
    setPhonePlaceholder("Enter 7–12 digit number");
    setPhonePattern("^[0-9]{7,12}$");
  } else if (value === "+91") {
    // India: exactly 10 digits
    setPhonePlaceholder("Enter 10-digit number");
    setPhonePattern("^[0-9]{10}$");
  } else {
    // All other countries
    setPhonePlaceholder("Enter 7–15 digits");
    setPhonePattern("^[0-9]{7,15}$");
  }
};


  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Logo */}
        <div className="flex items-center justify-center py-4">
          <img src="/QA%20logo.png" alt="boatcraft" className="h-12 w-12" />
        </div>

        {/* Close button */}
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-blue-700 uppercase">
            Hurry: 7 Seats Left! Waitlist Extends to 2026
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            Reserve your spot now for the 3-Day AI Sales Bootcamp
          </p>
        </div>

        {msg && <p className="api-msg">{msg}</p>}

        <form
          action="https://getnos.io/Algo/main.php"
          method="post"
          className="space-y-3"
        >
          {/* Full Name */}
          {/* Full Name + Last Name (side by side) */}
          <div className="name-row">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name*"
              required
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name*"
              required
            />
          </div>



          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
          />

          

          {/* Phone Section */}
          <div className="phone-input-container flex gap-2">
 <select
  name="country_code"
  required
  defaultValue="+971"
  onChange={handleCountryChange}
>

<option value="+971">+971 (UAE)</option>
<option value="+93">+93 (Afghanistan)</option>
<option value="+355">+355 (Albania)</option>
<option value="+213">+213 (Algeria)</option>
<option value="+1-684">+1-684 (American Samoa)</option>
<option value="+376">+376 (Andorra)</option>
<option value="+244">+244 (Angola)</option>
<option value="+1-264">+1-264 (Anguilla)</option>
<option value="+672">+672 (Antarctica)</option>
<option value="+1-268">+1-268 (Antigua & Barbuda)</option>
<option value="+54">+54 (Argentina)</option>
<option value="+374">+374 (Armenia)</option>
<option value="+297">+297 (Aruba)</option>
<option value="+61">+61 (Australia)</option>
<option value="+43">+43 (Austria)</option>
<option value="+994">+994 (Azerbaijan)</option>
<option value="+1-242">+1-242 (Bahamas)</option>
<option value="+973">+973 (Bahrain)</option>
<option value="+880">+880 (Bangladesh)</option>
<option value="+1-246">+1-246 (Barbados)</option>
<option value="+375">+375 (Belarus)</option>
<option value="+32">+32 (Belgium)</option>
<option value="+501">+501 (Belize)</option>
<option value="+229">+229 (Benin)</option>
<option value="+1-441">+1-441 (Bermuda)</option>
<option value="+975">+975 (Bhutan)</option>
<option value="+591">+591 (Bolivia)</option>
<option value="+387">+387 (Bosnia & Herzegovina)</option>
<option value="+267">+267 (Botswana)</option>
<option value="+55">+55 (Brazil)</option>
<option value="+246">+246 (British Indian Ocean Territory)</option>
<option value="+673">+673 (Brunei)</option>
<option value="+359">+359 (Bulgaria)</option>
<option value="+226">+226 (Burkina Faso)</option>
<option value="+257">+257 (Burundi)</option>
<option value="+855">+855 (Cambodia)</option>
<option value="+237">+237 (Cameroon)</option>
<option value="+1">+1 (USA / Canada)</option>
<option value="+238">+238 (Cape Verde)</option>
<option value="+1-345">+1-345 (Cayman Islands)</option>
<option value="+236">+236 (Central African Republic)</option>
<option value="+235">+235 (Chad)</option>
<option value="+56">+56 (Chile)</option>
<option value="+86">+86 (China)</option>
<option value="+57">+57 (Colombia)</option>
<option value="+269">+269 (Comoros)</option>
<option value="+242">+242 (Congo)</option>
<option value="+243">+243 (DR Congo)</option>
<option value="+506">+506 (Costa Rica)</option>
<option value="+225">+225 (Côte d’Ivoire)</option>
<option value="+385">+385 (Croatia)</option>
<option value="+53">+53 (Cuba)</option>
<option value="+357">+357 (Cyprus)</option>
<option value="+420">+420 (Czech Republic)</option>
<option value="+45">+45 (Denmark)</option>
<option value="+253">+253 (Djibouti)</option>
<option value="+1-767">+1-767 (Dominica)</option>
<option value="+1-809">+1-809 (Dominican Republic)</option>
<option value="+593">+593 (Ecuador)</option>
<option value="+20">+20 (Egypt)</option>
<option value="+503">+503 (El Salvador)</option>
<option value="+240">+240 (Equatorial Guinea)</option>
<option value="+291">+291 (Eritrea)</option>
<option value="+372">+372 (Estonia)</option>
<option value="+251">+251 (Ethiopia)</option>
<option value="+679">+679 (Fiji)</option>
<option value="+358">+358 (Finland)</option>
<option value="+33">+33 (France)</option>
<option value="+241">+241 (Gabon)</option>
<option value="+220">+220 (Gambia)</option>
<option value="+995">+995 (Georgia)</option>
<option value="+49">+49 (Germany)</option>
<option value="+233">+233 (Ghana)</option>
<option value="+30">+30 (Greece)</option>
<option value="+1-473">+1-473 (Grenada)</option>
<option value="+502">+502 (Guatemala)</option>
<option value="+224">+224 (Guinea)</option>
<option value="+245">+245 (Guinea-Bissau)</option>
<option value="+592">+592 (Guyana)</option>
<option value="+509">+509 (Haiti)</option>
<option value="+504">+504 (Honduras)</option>
<option value="+852">+852 (Hong Kong)</option>
<option value="+36">+36 (Hungary)</option>
<option value="+354">+354 (Iceland)</option>
<option value="+91">+91 (India)</option>
<option value="+62">+62 (Indonesia)</option>
<option value="+98">+98 (Iran)</option>
<option value="+964">+964 (Iraq)</option>
<option value="+353">+353 (Ireland)</option>
<option value="+972">+972 (Israel)</option>
<option value="+39">+39 (Italy)</option>
<option value="+81">+81 (Japan)</option>
<option value="+962">+962 (Jordan)</option>
<option value="+7">+7 (Kazakhstan)</option>
<option value="+254">+254 (Kenya)</option>
<option value="+965">+965 (Kuwait)</option>
<option value="+996">+996 (Kyrgyzstan)</option>
<option value="+856">+856 (Laos)</option>
<option value="+371">+371 (Latvia)</option>
<option value="+961">+961 (Lebanon)</option>
<option value="+266">+266 (Lesotho)</option>
<option value="+231">+231 (Liberia)</option>
<option value="+218">+218 (Libya)</option>
<option value="+423">+423 (Liechtenstein)</option>
<option value="+370">+370 (Lithuania)</option>
<option value="+352">+352 (Luxembourg)</option>
<option value="+853">+853 (Macau)</option>
<option value="+389">+389 (North Macedonia)</option>
<option value="+261">+261 (Madagascar)</option>
<option value="+60">+60 (Malaysia)</option>
<option value="+960">+960 (Maldives)</option>
<option value="+223">+223 (Mali)</option>
<option value="+356">+356 (Malta)</option>
<option value="+52">+52 (Mexico)</option>
<option value="+373">+373 (Moldova)</option>
<option value="+976">+976 (Mongolia)</option>
<option value="+382">+382 (Montenegro)</option>
<option value="+212">+212 (Morocco)</option>
<option value="+258">+258 (Mozambique)</option>
<option value="+95">+95 (Myanmar)</option>
<option value="+264">+264 (Namibia)</option>
<option value="+977">+977 (Nepal)</option>
<option value="+31">+31 (Netherlands)</option>
<option value="+64">+64 (New Zealand)</option>
<option value="+505">+505 (Nicaragua)</option>
<option value="+227">+227 (Niger)</option>
<option value="+234">+234 (Nigeria)</option>
<option value="+47">+47 (Norway)</option>
<option value="+968">+968 (Oman)</option>
<option value="+92">+92 (Pakistan)</option>
<option value="+507">+507 (Panama)</option>
<option value="+675">+675 (Papua New Guinea)</option>
<option value="+595">+595 (Paraguay)</option>
<option value="+51">+51 (Peru)</option>
<option value="+63">+63 (Philippines)</option>
<option value="+48">+48 (Poland)</option>
<option value="+351">+351 (Portugal)</option>
<option value="+974">+974 (Qatar)</option>
<option value="+40">+40 (Romania)</option>
<option value="+7">+7 (Russia)</option>
<option value="+250">+250 (Rwanda)</option>
<option value="+966">+966 (Saudi Arabia)</option>
<option value="+221">+221 (Senegal)</option>
<option value="+381">+381 (Serbia)</option>
<option value="+65">+65 (Singapore)</option>
<option value="+421">+421 (Slovakia)</option>
<option value="+386">+386 (Slovenia)</option>
<option value="+27">+27 (South Africa)</option>
<option value="+82">+82 (South Korea)</option>
<option value="+34">+34 (Spain)</option>
<option value="+94">+94 (Sri Lanka)</option>
<option value="+46">+46 (Sweden)</option>
<option value="+41">+41 (Switzerland)</option>
<option value="+66">+66 (Thailand)</option>
<option value="+228">+228 (Togo)</option>
<option value="+216">+216 (Tunisia)</option>
<option value="+90">+90 (Turkey)</option>
<option value="+44">+44 (UK)</option>
<option value="+380">+380 (Ukraine)</option>
<option value="+598">+598 (Uruguay)</option>
<option value="+998">+998 (Uzbekistan)</option>
<option value="+58">+58 (Venezuela)</option>
<option value="+84">+84 (Vietnam)</option>
<option value="+967">+967 (Yemen)</option>
<option value="+260">+260 (Zambia)</option>
<option value="+263">+263 (Zimbabwe)</option>

            </select>

            <input
              type="tel"
              name="phone"
              placeholder={phonePlaceholder}
              required
              pattern={phonePattern}
              title="Enter a valid phone number"
              className="flex-1"
            />
          </div>

          {/* ===== Additional Dropdown Fields (stacked one by one) ===== */}
          {/* ===== Dropdowns side by side ===== */}
          {/* ===== Dropdowns side by side ===== */}
          <div className="dropdown-grid">
          <select name="goal" required defaultValue="">
  <option value="" disabled hidden>
    What are you looking to gain with Quantum Algo?
  </option>

  <option value="Maximize trading profits without the hassle">
    Maximize trading profits without the hassle
  </option>
  <option value="Diversify my investment strategy">
    Diversify my investment strategy
  </option>
  <option value="Achieve financial freedom through automated trading">
    Achieve financial freedom through automated trading
  </option>
  <option value="Leverage expert-built algorithms for better returns">
    Leverage expert-built algorithms for better returns
  </option>
</select>


            <select name="investment_ready" required defaultValue="">
              <option value="" disabled hidden>Do you have $5000 to invest?</option>
              <option value="Yes, I have the funds available">
                Yes, I have the funds available
              </option>
              <option value="I can secure funding">
                I can secure funding
              </option>
              <option value="No, end this application">
                No, end this application
              </option>
            </select>

            <select name="commitment" required defaultValue="">
              <option value="" disabled hidden>
                How committed are you to starting the done-for-you program?
              </option>
              <option value="Ready to start immediately">
                Ready to start immediately
              </option>
              <option value="Interested but need more details">
                Interested but need more details
              </option>
              <option value="Just exploring options">
                Just exploring options
              </option>
            </select>

            <select name="experience" required defaultValue="">
              <option value="" disabled hidden>
                How would you describe your experience as a trader?
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Hidden call_date field - auto-filled with today's date */}
          <input
            type="hidden"
            name="call_date"
            value={new Date().toISOString().split('T')[0]}
          />


          {/* Submit button */}
          <button
            type="submit"
            className="rounded-full px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-xl font-bold text-white bg-gradient-to-r from-[#a40d5f] to-[#a40d5f] shadow-[0_4px_20px_rgba(100,60,255,0.18)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none w-[80%]"
          >
            Yes! Save My Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
