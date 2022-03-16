const pop_join = document.getElementById('pop_join');

window.addEventListener('scroll', () => {
    console.log("window is scrolled...");
    let btn = document.getElementById("join_btn");
    // console.log(btn);
    let btn_rect = btn.getBoundingClientRect();
    // console.log(btn_rect);
    let bottom = btn_rect.bottom;
    let top = btn_rect.top;
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // console.log(viewportHeight,top,bottom);

    // partial visible condition
    if (viewportHeight - top > 0 && bottom > 0) {
        console.log("join is partially visible");
        pop_join.classList.replace('show_flex', "hide");
    } else {
        pop_join.classList.replace('hide', 'show_flex');
    }

    // full visible condition
    if (bottom > 0 && bottom <= viewportHeight && top >= 0) {
        console.log("join is in the view");
    }
});

const team = [
    ['https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aniket_singh_ZF9HAeE.jpeg', 'Aniket Singh', 'Team Lead'],

    ['https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/somesh_lad_VpWF5O6.jpg', 'Somesh Lad', 'Web Developer'],

    ['https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/pushkar_khadase_9rUJw7V.jpg', 'Pushkar Khadase', 'Cyber Security'],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/amit_sharma_vpIsdXX.jpg', 'Amit Sharma', 'Machine Learning and DevOps'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/abhishek_sharma_3B9GgDN.jpg', 'Abhishek Sharma', 'Cloud Technology'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/pratik_pawar.jpg', 'Pratik Pawar', 'Android Developer'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/tanmay_vaidya_2w7GtU0.jpg', 'Tanmay Vaidya', 'Tech Volunteer'
    ], [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ankit_tamboli_IPQCqAw.jpg', 'Ankit Tamboli', 'Web Developer Volunteer'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/sunidhi_jain_ER6YXHs.jpg', 'Sunidhi Jain', 'Marketing Volunteer'
    ],
    [
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/dhanshree_shimpi.jpg', 'Dhanshree Shimpi', 'Graphic Design Volunteer'
    ]
]
let html_to_be_added = ''
for (let index = 0; index < team.length; index++) {
    const member = team[index];
    let image_path = member[0];
    let name = member[1];
    let designation = member[2];
    let linkedin_link="";
    let twitter_link="";
    let leader = '';
    if (designation === 'Team Lead') {
        leader = 'leader';
    }
    let member_code = `
<div class="member ${leader}">
<div class="photo">
    <img src="${image_path}"
        alt="team member photo" class="photo">
</div>
<div class="name">${name}
</div>
<div class="designation">${designation}</div>
<a href="${twitter_link}"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" id="twitter"
        class="logo team_card_logo twitter svg-inline--fa fa-twitter-square fa-w-14" role="img"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z">
        </path>
    </svg></a><a href="${linkedin_link}"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" id="linkedin"
        class="logo team_card_logo linkedin svg-inline--fa fa-linkedin fa-w-14" role="img"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor"
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
        </path>
    </svg></a>
</div>`
    html_to_be_added += member_code;
};

document.getElementsByClassName('team')[0].innerHTML += html_to_be_added;

function contact_form_submit(){
    console.log("hello");
    let contact_href="mailto:brilliankitamboli@gmail.com";
    let subject="GDSC Contact Form"
    let email=document.getElementById("email");
    let name=document.getElementById("name");
    let message=document.getElementById("message").value;
    console.log(message);
    console.log(`${contact_href}?subject=${subject}&body=${message}`);
    location.href=`${contact_href}?subject=${subject}&body=${message}`
    let link="mailto:brilliankitamboli@gmail.com?subject=GDSC%20Contact%20Form&body=Name%3A%20Ankit%20Tamboli%0D%0AEmail%3A%20%22myemail%40gmail.com%22%0D%0AMessage%3A%20%22This%20is%20my%20message%20from%20me%20to%20you.%22"
}


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);