let option = document.querySelector(".share-option-social-media");
let profile = document.querySelector(".profile-share-opt");
function share_btn(){
  option.style.display='flex';
  profile.style.display ='block';
}

function share_cancel(){
  option.style.display='none';
  profile.style.display ='none';
}

document.getElementById("copyText").addEventListener("click", function () {
  // Get the input element
  const inputElement = document.getElementById("textInput");

  // Use Clipboard API to copy the value
  navigator.clipboard.writeText(inputElement.value)
    .then(() => {
      document.getElementById("textCopy").innerText = "Copied !";
      setTimeout(()=>{
        document.getElementById("textCopy").innerText="Copy";
      },3000) // Notify the user
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
});
