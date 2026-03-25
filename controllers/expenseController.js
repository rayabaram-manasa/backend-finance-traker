const Expense = require("./../models/expensemodel");
exports.getAllExpense = async (req,res) => {

   try{
    const expense =await Expense.find();
    res.json({success:true,count:expense.length,data:expense});
   }catch(error){
    res.status(500).json({success:false,message:error.message});
   }
    
};

exports.createExpense =async (req,res) => {
    try{
    const {description, amount,category ,date,notes}=req.body;
    const expense = new Expense({description, amount,category ,date,notes});
    const newExpense =await expense.save();
   res.status(201).json({success:true, data : newExpense});
   }catch(error){
    res.status(500).json({success:false,message : error.message});
   }
};

exports.updateExpense =async (req,res) => {
    try{
      const updateExpense =await Expense.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
    );

    console.log("Update Function" + req.params.id);

    if(!updateExpense)
        return res.status(404).json({success:false,message:"Not Found"});
        res.json({success:true, data :updateExpense});
      
   } catch(error){
    res.status(500).json({success:false,message : error.message});
   }
};

exports.deleteExpense =async (req,res) => {
    try{
      const deleted = await Expense.findByIdAndDelete(
        req.params.id
    );
    console.log("Delete Function" + req.params.id);

    

    if(!deleted)
        return res.status(404).json({success:false,message:"Not Found"});
        res.json({success:true, message : " Deleted Successfully"});
      
   } catch(error){
    res.status(500).json({success:false,message : error.message});
   }
};
