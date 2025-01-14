// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };
window.onscroll = () => {
    const top = window.scrollY;
    document.querySelectorAll('section').forEach(sec => {
        if (top >= sec.offsetTop - 150 && top < sec.offsetTop + sec.offsetHeight - 150) {
            const id = sec.id;
            document.querySelectorAll('header nav a').forEach(link => 
                link.classList.toggle('active', link.getAttribute('href').includes(id))
            );
        }
    });
};
