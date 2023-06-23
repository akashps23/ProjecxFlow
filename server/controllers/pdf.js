const upload=require("../utils/uploadPdf");

const uploadPdf = async (req,res)=> {
  try {
    console.log(req.file);
    const url = await upload(req.file.path);
    res.send("hi");

  }
  catch (error) {
    

}
}

module.exports= {uploadPdf}