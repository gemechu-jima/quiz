import dotenv from "dotenv";
import connect from "./db/config.js";
import {reactQuiz} from "./model/reactModel.js";
import {javascriptQuiz } from "./model/javascriptModel.js";
import {reactQuestions } from "./data/questions.js" ;
import {javascriptQuestions} from "./data/javascript.js" ;


dotenv.config();
connect();

const importDataReact = async () => {
    try {
        await reactQuiz.insertMany(reactQuestions);
        console.log("Data entered into DB react js");
        process.exit();
    } catch (error) {
        console.error("Error importing data:", error.message);
        process.exit(1);
    }
};
const importDataJavascript=async()=>{
    try {
        await javascriptQuiz.insertMany(javascriptQuestions);
        console.log("Data entered into DB javascript");
        process.exit();
    } catch (error) {
        console.error("Error importing data:", error.message);
        process.exit(1);
    }
}
const destroyDataReact = async () => {
    try {
        await reactQuiz.deleteMany();
        console.log("Data is delete from db react js");

    } catch (error) {
        console.error("Error destroying data:", error.message);
        process.exit(1);
    }
};
const destroyDataJavascript=async()=>{
    try {
        await javascriptQuiz.deleteMany()
        console.log("Data is delete from db javascript");

    } catch (error) {
        console.error("Error destroying data:", error.message);
        process.exit(1);
    }
}
if (process.argv[2] === "-d") {
    destroyDataReact();
} else if (process.argv[2] === "js"){
    importDataJavascript()
}else if(process.argv[2] === "-js"){
    destroyDataJavascript()
}else if(process.argv[2] === "r"){
    importDataReact();
}