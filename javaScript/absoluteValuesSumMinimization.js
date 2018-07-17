function absoluteValuesSumMinimization(a) {
    //check if the length of a is even or odd then subtracts one after dividing if its even to get 
    //the smaller of the medians
    return a.length % 2 == 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}