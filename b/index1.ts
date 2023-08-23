// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
type: string;
title: string;
author: string;
};

interface DVD {
  type: string;
  title: string;
  duration: number;
};

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];




// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems<t>(items: t[], filterFn:(item:t) => boolean ):t[] {
  const filterdArray:t[] = items.filter(filterFn);
  return filterdArray;
};


// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData<t>(items: t[]):void {
  items.forEach(item => {
    if (item.type === 'book'){
      console.log(`title: ${item.title}, author: ${item.author}`)
    }if (item.type === 'dvd'){
      console.log(`title: ${item.title}, duration:: ${item.duration}`)

    }}
  );
};


// Step 5:  הדפיסו את כל המידע הנתון 
// printItemsData(  libraryItems)
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  




function printItemsDatax(items: (Book | DVD)[]): void {
  items.forEach(item => {
      if (item.type === ItemType.Book) {
          console.log(`title: ${item.title}, author: ${item.author}`);
      } else if (item.type === ItemType.DVD) {
          console.log(`title: ${item.title}, duration: ${item.duration}`);
      }
  });
}

const libraryItemsx: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

printItemsData(libraryItems);
