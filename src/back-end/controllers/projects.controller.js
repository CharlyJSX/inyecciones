import { Projects } from "../models/Projects.js";

export const getProjects = async (req, res) =>{
    
        try {
        const projects = await Projects.findAll()
        res.json(projects)
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
 
       
}
export const createProjects = async (req, res) => {
  try {
    const {name, priority, description} = req.body
    const newProject = await Projects.create({
        name,
        priority,
        description
    })
    console.log(newProject)
    res.send('Creating Projects')
  } catch (error) {
    return res.status(500).json({message: error.message})
  }


}

export const updateProjects = async (req, res) => {
 try {
    const { id } = req.params;
    const {name, priority, description} = req.body
    
    const project = await project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description
    await project.save()
    res.json(project)
 } catch (error) {
    return res.status(500).json({message: error.message});
 }
}

export const deleteProjects = async (req, res) => {
    try {
        const { id } = req.params;
        await Projects.destroy({
            where: {
                id,
    }})
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
    export const getProject = async (req, res) =>{
        res.send("Obteniendo proyectos");
        
        
        try {
            const { id } = req.params;
            const Projects = await Projects.findAll(id)
            res.json(Projects)
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
           
    }
