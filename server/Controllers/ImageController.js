import File from "../models/File.js";

export const uploadImage = async (request,response) => {

    const fileobj = {
        path: request.File.path,
        name:request.File.originalname
    }

    try{
        const file = File.create(fileobj);
        response.status(200).json({path:`https://localhost:8000/file/${file._id}`});
    }
    catch(error)
    {
        console.error(error.message);
        response.status(500).json({error:error.message});
    }
} 

export const downloadImage = async (request,response) => {
    try{
        const file = await File.findById(request.params.fileId);
        await file.save();
        response.download(file.path,file.name);

    }catch(error)
    {
        console.error(error.message);
        return response.status(500).json({error:error.message});
    }
}   