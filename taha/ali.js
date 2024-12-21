let aliname ="طاها";
let alifamily =" میری";
let aliage = 16;
let birthday = 1404 - aliage;
let milad = 2025 - aliage;

document.write(`      <div class="card">

        <div class="name">

          <span>
        این صفحه برای 
${aliname}
${alifamily}
هست
          </span>

        </div>

        <div class="birthday">
          <div class="title">  و تاریخ تولد ایشان برابر</div>
          <div class="date">
            <div class="right">
              <div class="dr">میلادی</div>
              <div class="er">${milad}</div>

            </div>
            <div class="left">
              <div class="dl">شمسی</div>
              <div class="el">${birthday}</div>
            </div>
          </div>
        </div>

      </div>`);
