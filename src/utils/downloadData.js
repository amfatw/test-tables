const downloadData = (data, fileName) => {
  const jsonData = JSON.stringify(data);  

  const link = document.createElement('a');
  link.href = "data:text/json;charset=utf-8," + encodeURIComponent(jsonData);
  link.download = fileName;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);  
}


export {downloadData};