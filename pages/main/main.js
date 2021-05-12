
document.getElementById('Algebra').onclick = function() {
    document.getElementById('Algebra-info').style.display = "block";
    document.getElementById('Informatics-info').style.display = "none";
    document.getElementById('tip').style.display = "none";

    document.getElementById('Algebra').style.boxShadow = "0px 3px 0px #38A77C";
    document.getElementById('Informatics').style.boxShadow = "none";
  }

  document.getElementById('Informatics').onclick = function() {
    document.getElementById('Informatics-info').style.display = "block";
    document.getElementById('Algebra-info').style.display = "none";
    document.getElementById('tip').style.display = "none";

    document.getElementById('Informatics').style.boxShadow = "0px 3px 0px #38A77C";
    document.getElementById('Algebra').style.boxShadow = "none";
  }