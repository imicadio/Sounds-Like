/* window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; // zatrzymanie funkcji 
	audio.currentTime = 0; // przewija do początku  currentTime ustawia pozycję czasową 
	audio.play();
	key.classList.add('playing');
});

*/
function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; // zatrzymanie funkcji 
	audio.currentTime = 0; // przewija do początku  currentTime ustawia pozycję czasową 
	audio.play();
	key.classList.add('playing');
}



function removeTransition(e){
		// console.log(e);
		if (e.propertyName !== 'transform') return;
		console.log(this);
		this.classList.remove('playing');
	}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// console.log(keys);
// console.log(keys[0]);

// setTimeout(function(e){document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.remove('playing')}, 1200)
