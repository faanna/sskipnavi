const skipNavi = document.querySelectorAll('#skipNavi li a');

for (let el of skipNavi) {
	// if(skipNavi.addEventlisner('focusin', (e)=> {
	//     e.preventDefault();
	//     skipNavi.classList.add('on')
	// })
	// if(skipNavi.addEventlisner("fosusout",()=>{

	// }))
	el.addEventListener('focusin', () => {
		el.classList.add('on');
	});
	el.addEventListener('focusout', () => {
		el.classList.remove('on');
	});
}
