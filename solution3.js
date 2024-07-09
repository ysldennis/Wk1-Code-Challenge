function calculateNetSalary(basicSalary, benefits) {
    // Constants for calculations
    const personalRelief = 2400;
    const nssfRate = 0.06;
    const maxNSSF = 2160; // 1080 * 2 for both employee and employer
    const housingLevyRate = 0.015; // 1.5%
    
    // Calculate the gross salary
    const grossSalary = basicSalary + benefits;
    
    // Calculate the PAYE (Tax)
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
        paye = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }
    paye -= personalRelief;

    // Calculate the NHIF deductions based on slab
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // Calculate NSSF deduction
    let nssf = grossSalary * nssfRate;
    if (nssf > maxNSSF) nssf = maxNSSF;

    // Calculate Housing Levy
    const housingLevy = grossSalary * housingLevyRate;

    // Calculate net salary
    const netSalary = grossSalary - paye - nhif - nssf - housingLevy;

    // Return all values in an object
    return {
        grossSalary: grossSalary.toFixed(2),
        paye: paye.toFixed(2),
        nhif: nhif.toFixed(2),
        nssf: nssf.toFixed(2),
        housingLevy: housingLevy.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}
