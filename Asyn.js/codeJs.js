const inser1=document.getElementById('insert');
window.addEventListener('keydown',function(e){
 inser1.innerText=`
 <div class='color'>
 <table>
  <tr>
    <th>${code}</th>
    <th>${codekey}</th>
    <th>${code}</th>
  </tr>
  <tr>
    <td>${e.code}</td>
    // <td>${e.keyCode}</td>
    <td>${e.key}</td>
  </tr>
  </table>
 </div>
 `;
})
    