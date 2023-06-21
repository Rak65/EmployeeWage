{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Max_Working_Days = 20;
    const Max_Hours = 160;
    
    let total_emp_Hrs = 0;
    let total_working_Days = 0;

    let Emp_Wage_Array = new Array(); 
    let Emp_Wage_Map = new Map();
    let Emp_Hrs_Map = new Map();

    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
            
        }
    }
    
    function calculateWages(empHrs)
    {
        return empHrs * Wage_Per_Hr
    }

    while(total_emp_Hrs <= Max_Hours && total_working_Days < Max_Working_Days)
    {
        total_working_Days++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        total_emp_Hrs += empHrs; 
        Emp_Wage_Array.push(calculateWages(empHrs));
        Emp_Hrs_Map.set(total_working_Days , empHrs);
        Emp_Wage_Map.set(total_working_Days, calculateWages(empHrs));
    }
    
    let empWage = calculateWages(total_emp_Hrs);

    console.log("-------- Emp Daily Wage Array -------");
    console.log(Emp_Wage_Array);

    console.log("\n------ Emp Wage Map -------");
    console.log(Emp_Wage_Map);

    console.log("\n-------- Emp Hour Map --------");
    console.log(Emp_Hrs_Map);

    console.log("Total Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage + ", Total Days: " + total_working_Days);
    //console.log(Emp_Wage_Array);

    function totalWages(totalwage , dailywage)
    {
        return totalwage + dailywage
    }

    console.log("\n--------Total emp wage using map -------");
    console.log("Emp wagemap total wages: " + Array.from(Emp_Wage_Map.values()).reduce(totalWages , 0));

}