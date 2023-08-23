// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
// ['asd',3]
const creatArrayArrow:<t,r>(item1:t, item2: r) => [t,r] = <t, r>(item1:t, item2:r) => {
    return [item1,item2]
}
function creatArray<t,r>(item1:t, item2: r):[t,r] {
    const newArray:[t,r] = [item1,item2];
    return newArray
}

// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const getValueByKeyArrow:<T, K extends keyof T>(obj: T, key: K) => T[K] = <T, K extends keyof T>(obj: T, key: K) =>{
    return obj[key];
}



//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך 
// עליכם לקרוא על ולהשתמש ב: Record  

console.log(getValueByKey({ss:'ff'},'ss'));

// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &

