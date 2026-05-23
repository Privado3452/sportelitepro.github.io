try {
    const preloadImageList = window.preLinkImageList; 
    
    preloadImageList[location.pathname].forEach((e) => {
      const link = document.createElement("link"); 
      link.href = e;
      link.rel = "preload"; 
      link.as = "image";
      document.head.appendChild(link);
    });
  
  } catch (err) {
    console.error("Error al precargar imágenes:", err);
  }
  