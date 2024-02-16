
<template>
  <div id="content">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

  #content {
    
    $font-size: 14pt;

    :deep(a) {
      text-decoration: none;
      color: rgb(65, 195, 255);
      border-radius: 6px;
      transition: ease-out .05s;
  
      &:hover {
        color: white;
        /* background: rgb(35, 111, 250); */
        text-decoration: underline;
      }
    }

    :deep(img) {
      width: 35%;
      text-align: center;
  
      // padding-left: 15%;
      // padding-right: 15%;
    }
    
    :deep(blockquote) {
      text-align: center;
      background: rgba(255, 255, 255, 0.13);
      font-weight: bold;
  
      padding-top: 15px;
      padding-bottom: 15px;
  
      border-radius: 10px;
  
      border-left: 5px solid rgb(36, 17, 143);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  
      margin-left: 30%;
      margin-right: 30%;
    }
  
    :deep(i) {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: $font-size;
    }
  
    :deep(p) {
      padding-left: 30% !important;
      padding-right: 30% !important;
      max-width: 100% !important;
      width: auto;
      font-size: $font-size;
      text-align: justify;
    }
  
    :deep(.list) {
      display: flex;
      justify-content: center;
  
      text-align: center;
  
      &> * {
        width: auto;
        font-size: $font-size;
      }
    }
  
    :deep(.codewrapper) {
      display: flex;
      justify-content: center;
    }
  
    :deep(#roadmap) {
      display: flex;
      justify-content: center;
    
      font-size: 17pt;
      
      ul {
        list-style-type: none;
        text-align: center;
    
        list-style-type: '⬜';
      }
  
      li {
        padding-left: 10px;
      }
  
      .checked {
        list-style-type: '✅';
      }
    }
  
    :deep(details) {
      text-align: left;
      width: auto;
      padding-left: 20%;
      padding-right: 20%;
  
      summary {
        font-size: 15pt;
        font-weight: bold;
        background: rgba(0, 119, 255, 0.116);
        border-radius: 15px;
    
        padding: 2px;
        padding-left: 10px;
        margin-bottom: 10px;
        
        cursor: pointer;
      }
  
      blockquote {
        margin: 0;
        margin-bottom: 20px;
      }
    
      hr {
        border-color: rgba(255, 255, 255, 0.411);
      }
    }
  
    :deep(code) {
      padding: 2px;
      background: rgba(43, 43, 43, 0.877);
      border-radius: 4px;
      font-size: $font-size
    }
  
    :deep(h2) {
      text-align: center;
      margin-top: 50px;
  
      display: flex;
      flex-direction: column;
      
      &::before {
        content: "";
        /* width: 100%; */
        height: 10px;
        
        margin-left: 150px;
        margin-right: 150px;
    
        border-top: 1px solid rgba(255, 255, 255, 0.492);
      }
    }
  
    :deep(h3, h4) {
      text-align: center;
    }
    
    :deep(pre:has(#htmlViewer)) {
      display: flex;
      justify-content: center;
    }
    
    :deep(#htmlViewer) {
      width: 100%;
      max-width: 800px;
      
      overflow-x: scroll;
      font-size: $font-size;
      margin-left: 100px;
      margin-right: 100px;
      border-radius: 10px;
  
      &::-webkit-scrollbar {
        height: 10px;
      }
  
      &::-webkit-scrollbar-track {
        background: transparent;
      }
  
      &::-webkit-scrollbar-thumb {
        background: rgb(14, 10, 63);
      }
    }
  
    @media only screen and (max-width: 700px) {
      :deep(blockquote) {
        margin: 0 !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
      }
  
      :deep(p) {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }

      :deep(img) {
        width: 90%;
      }
  
      :deep(#roadmap) {
        font-size: 14pt !important;
      }
  
      :deep(details) {
        padding-left: 20px;
        padding-right: 20px;
      }
  
      :deep(#htmlViewer) {
        margin: 0;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }



</style>