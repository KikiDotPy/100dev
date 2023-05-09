function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
  }


  function htmlspecialchars(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}