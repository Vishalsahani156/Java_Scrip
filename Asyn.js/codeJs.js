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
    // <td>${e.keyCode}</td><h2>Value	State	Description
        0	UNSENT	Client has been created. open() not called yet.
        1	OPENED	open() has been called.
        2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        3	LOADING	Downloading; responseText holds partial data.
        4	DONE	The operation is complete.</h2>
    <td>${e.key}</td>
  </tr>
  </table>
 </div>
 `;
})
    