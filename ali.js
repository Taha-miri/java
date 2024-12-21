let aliname = prompt("enter your name ");
let alifamily = prompt("enter your family name ");
let aliage = +prompt("enter your age ");
let birthday = 1404 - aliage;
let milad = 2025 - aliage;

document.write(`      <div class="card">

        <div class="name">

          <span>
          شما
${aliname}
${alifamily}
هستید
          </span>

        </div>

        <div class="birthday">
          <div class="title"> و تاریخ تولد شما </div>
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
