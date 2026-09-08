const toggle = document.querySelector('#theme-toggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'dark') root.dataset.theme = 'dark';
function updateButton(){
  if(!toggle) return;
  const dark = root.dataset.theme === 'dark';
  toggle.textContent = dark ? '☀ Light' : '☾ Dark';
  toggle.setAttribute('aria-pressed', String(dark));
}
toggle?.addEventListener('click',()=>{
  const dark = root.dataset.theme === 'dark';
  root.dataset.theme = dark ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateButton();
});
updateButton();
