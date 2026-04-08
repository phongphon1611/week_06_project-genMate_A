

















































const Tesla = require("./tesla");

const ModelY=new Tesla("Y","SUV");
const Model3=new Tesla("3","Sedan");
const Cybertruck=new Tesla("Cybertruck","truck");


ModelY.callIntroduce();
ModelY.callModel();
Model3.callIntroduce();
Model3.callModel();
Cybertruck.callIntroduce();
Cybertruck.callModel();