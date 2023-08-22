function countBmi(bUdin, tUdin, bNanang, tNanang) {
    if(bUdin / tUdin ** 2 > bNanang / tNanang **2) {
        console.log(`BMI Udin lebih tinggi dari Nanang`)
    } else {
        console.log(`BMI Nanang lebih tinggi dari udin`)
    }
}

countBmi(95, 1.88, 85, 1.76);