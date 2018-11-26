
const formData = {
    id: '',
    Sepal_Length: 0,
    Sepal_Width: 0,
    Petal_Length: 0,
    Petal_Width: 0,
    Species: '',
    sum: 0, // 样本之间的距离
};


export default {
    namespace: 'datasets',

    state: {
        data: [], // 数据集
        SepalData: [],
        PetalData: [],
    },

    effects: {
        *fetchData(_, { put }) {
            const data = [{ id: "1", Sepal_Length: 5.1, Sepal_Width: 3.5, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "2", Sepal_Length: 4.9, Sepal_Width: 3, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "3", Sepal_Length: 4.7, Sepal_Width: 3.2, Petal_Length: 1.3, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "4", Sepal_Length: 4.6, Sepal_Width: 3.1, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "5", Sepal_Length: 5, Sepal_Width: 3.6, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "6", Sepal_Length: 5.4, Sepal_Width: 3.9, Petal_Length: 1.7, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "7", Sepal_Length: 4.6, Sepal_Width: 3.4, Petal_Length: 1.4, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "8", Sepal_Length: 5, Sepal_Width: 3.4, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "9", Sepal_Length: 4.4, Sepal_Width: 2.9, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "10", Sepal_Length: 4.9, Sepal_Width: 3.1, Petal_Length: 1.5, Petal_Width: 0.1, Species: "setosa", sum: 0 },
            { id: "11", Sepal_Length: 5.4, Sepal_Width: 3.7, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "12", Sepal_Length: 4.8, Sepal_Width: 3.4, Petal_Length: 1.6, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "13", Sepal_Length: 4.8, Sepal_Width: 3, Petal_Length: 1.4, Petal_Width: 0.1, Species: "setosa", sum: 0 },
            { id: "14", Sepal_Length: 4.3, Sepal_Width: 3, Petal_Length: 1.1, Petal_Width: 0.1, Species: "setosa", sum: 0 },
            { id: "15", Sepal_Length: 5.8, Sepal_Width: 4, Petal_Length: 1.2, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "16", Sepal_Length: 5.7, Sepal_Width: 4.4, Petal_Length: 1.5, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "17", Sepal_Length: 5.4, Sepal_Width: 3.9, Petal_Length: 1.3, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "18", Sepal_Length: 5.1, Sepal_Width: 3.5, Petal_Length: 1.4, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "19", Sepal_Length: 5.7, Sepal_Width: 3.8, Petal_Length: 1.7, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "20", Sepal_Length: 5.1, Sepal_Width: 3.8, Petal_Length: 1.5, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "21", Sepal_Length: 5.4, Sepal_Width: 3.4, Petal_Length: 1.7, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "22", Sepal_Length: 5.1, Sepal_Width: 3.7, Petal_Length: 1.5, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "23", Sepal_Length: 4.6, Sepal_Width: 3.6, Petal_Length: 1, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "24", Sepal_Length: 5.1, Sepal_Width: 3.3, Petal_Length: 1.7, Petal_Width: 0.5, Species: "setosa", sum: 0 },
            { id: "25", Sepal_Length: 4.8, Sepal_Width: 3.4, Petal_Length: 1.9, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "26", Sepal_Length: 5, Sepal_Width: 3, Petal_Length: 1.6, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "27", Sepal_Length: 5, Sepal_Width: 3.4, Petal_Length: 1.6, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "28", Sepal_Length: 5.2, Sepal_Width: 3.5, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "29", Sepal_Length: 5.2, Sepal_Width: 3.4, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "30", Sepal_Length: 4.7, Sepal_Width: 3.2, Petal_Length: 1.6, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "31", Sepal_Length: 4.8, Sepal_Width: 3.1, Petal_Length: 1.6, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "32", Sepal_Length: 5.4, Sepal_Width: 3.4, Petal_Length: 1.5, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "33", Sepal_Length: 5.2, Sepal_Width: 4.1, Petal_Length: 1.5, Petal_Width: 0.1, Species: "setosa", sum: 0 },
            { id: "34", Sepal_Length: 5.5, Sepal_Width: 4.2, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "35", Sepal_Length: 4.9, Sepal_Width: 3.1, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "36", Sepal_Length: 5, Sepal_Width: 3.2, Petal_Length: 1.2, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "37", Sepal_Length: 5.5, Sepal_Width: 3.5, Petal_Length: 1.3, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "38", Sepal_Length: 4.9, Sepal_Width: 3.6, Petal_Length: 1.4, Petal_Width: 0.1, Species: "setosa", sum: 0 },
            { id: "39", Sepal_Length: 4.4, Sepal_Width: 3, Petal_Length: 1.3, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "40", Sepal_Length: 5.1, Sepal_Width: 3.4, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "41", Sepal_Length: 5, Sepal_Width: 3.5, Petal_Length: 1.3, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "42", Sepal_Length: 4.5, Sepal_Width: 2.3, Petal_Length: 1.3, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "43", Sepal_Length: 4.4, Sepal_Width: 3.2, Petal_Length: 1.3, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "44", Sepal_Length: 5, Sepal_Width: 3.5, Petal_Length: 1.6, Petal_Width: 0.6, Species: "setosa", sum: 0 },
            { id: "45", Sepal_Length: 5.1, Sepal_Width: 3.8, Petal_Length: 1.9, Petal_Width: 0.4, Species: "setosa", sum: 0 },
            { id: "46", Sepal_Length: 4.8, Sepal_Width: 3, Petal_Length: 1.4, Petal_Width: 0.3, Species: "setosa", sum: 0 },
            { id: "47", Sepal_Length: 5.1, Sepal_Width: 3.8, Petal_Length: 1.6, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "48", Sepal_Length: 4.6, Sepal_Width: 3.2, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "49", Sepal_Length: 5.3, Sepal_Width: 3.7, Petal_Length: 1.5, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "50", Sepal_Length: 5, Sepal_Width: 3.3, Petal_Length: 1.4, Petal_Width: 0.2, Species: "setosa", sum: 0 },
            { id: "51", Sepal_Length: 7, Sepal_Width: 3.2, Petal_Length: 4.7, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "52", Sepal_Length: 6.4, Sepal_Width: 3.2, Petal_Length: 4.5, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "53", Sepal_Length: 6.9, Sepal_Width: 3.1, Petal_Length: 4.9, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "54", Sepal_Length: 5.5, Sepal_Width: 2.3, Petal_Length: 4, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "55", Sepal_Length: 6.5, Sepal_Width: 2.8, Petal_Length: 4.6, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "56", Sepal_Length: 5.7, Sepal_Width: 2.8, Petal_Length: 4.5, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "57", Sepal_Length: 6.3, Sepal_Width: 3.3, Petal_Length: 4.7, Petal_Width: 1.6, Species: "versicolor", sum: 0 },
            { id: "58", Sepal_Length: 4.9, Sepal_Width: 2.4, Petal_Length: 3.3, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "59", Sepal_Length: 6.6, Sepal_Width: 2.9, Petal_Length: 4.6, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "60", Sepal_Length: 5.2, Sepal_Width: 2.7, Petal_Length: 3.9, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "61", Sepal_Length: 5, Sepal_Width: 2, Petal_Length: 3.5, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "62", Sepal_Length: 5.9, Sepal_Width: 3, Petal_Length: 4.2, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "63", Sepal_Length: 6, Sepal_Width: 2.2, Petal_Length: 4, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "64", Sepal_Length: 6.1, Sepal_Width: 2.9, Petal_Length: 4.7, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "65", Sepal_Length: 5.6, Sepal_Width: 2.9, Petal_Length: 3.6, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "66", Sepal_Length: 6.7, Sepal_Width: 3.1, Petal_Length: 4.4, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "67", Sepal_Length: 5.6, Sepal_Width: 3, Petal_Length: 4.5, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "68", Sepal_Length: 5.8, Sepal_Width: 2.7, Petal_Length: 4.1, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "69", Sepal_Length: 6.2, Sepal_Width: 2.2, Petal_Length: 4.5, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "70", Sepal_Length: 5.6, Sepal_Width: 2.5, Petal_Length: 3.9, Petal_Width: 1.1, Species: "versicolor", sum: 0 },
            { id: "71", Sepal_Length: 5.9, Sepal_Width: 3.2, Petal_Length: 4.8, Petal_Width: 1.8, Species: "versicolor", sum: 0 },
            { id: "72", Sepal_Length: 6.1, Sepal_Width: 2.8, Petal_Length: 4, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "73", Sepal_Length: 6.3, Sepal_Width: 2.5, Petal_Length: 4.9, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "74", Sepal_Length: 6.1, Sepal_Width: 2.8, Petal_Length: 4.7, Petal_Width: 1.2, Species: "versicolor", sum: 0 },
            { id: "75", Sepal_Length: 6.4, Sepal_Width: 2.9, Petal_Length: 4.3, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "76", Sepal_Length: 6.6, Sepal_Width: 3, Petal_Length: 4.4, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "77", Sepal_Length: 6.8, Sepal_Width: 2.8, Petal_Length: 4.8, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "78", Sepal_Length: 6.7, Sepal_Width: 3, Petal_Length: 5, Petal_Width: 1.7, Species: "versicolor", sum: 0 },
            { id: "79", Sepal_Length: 6, Sepal_Width: 2.9, Petal_Length: 4.5, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "80", Sepal_Length: 5.7, Sepal_Width: 2.6, Petal_Length: 3.5, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "81", Sepal_Length: 5.5, Sepal_Width: 2.4, Petal_Length: 3.8, Petal_Width: 1.1, Species: "versicolor", sum: 0 },
            { id: "82", Sepal_Length: 5.5, Sepal_Width: 2.4, Petal_Length: 3.7, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "83", Sepal_Length: 5.8, Sepal_Width: 2.7, Petal_Length: 3.9, Petal_Width: 1.2, Species: "versicolor", sum: 0 },
            { id: "84", Sepal_Length: 6, Sepal_Width: 2.7, Petal_Length: 5.1, Petal_Width: 1.6, Species: "versicolor", sum: 0 },
            { id: "85", Sepal_Length: 5.4, Sepal_Width: 3, Petal_Length: 4.5, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "86", Sepal_Length: 6, Sepal_Width: 3.4, Petal_Length: 4.5, Petal_Width: 1.6, Species: "versicolor", sum: 0 },
            { id: "87", Sepal_Length: 6.7, Sepal_Width: 3.1, Petal_Length: 4.7, Petal_Width: 1.5, Species: "versicolor", sum: 0 },
            { id: "88", Sepal_Length: 6.3, Sepal_Width: 2.3, Petal_Length: 4.4, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "89", Sepal_Length: 5.6, Sepal_Width: 3, Petal_Length: 4.1, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "90", Sepal_Length: 5.5, Sepal_Width: 2.5, Petal_Length: 4, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "91", Sepal_Length: 5.5, Sepal_Width: 2.6, Petal_Length: 4.4, Petal_Width: 1.2, Species: "versicolor", sum: 0 },
            { id: "92", Sepal_Length: 6.1, Sepal_Width: 3, Petal_Length: 4.6, Petal_Width: 1.4, Species: "versicolor", sum: 0 },
            { id: "93", Sepal_Length: 5.8, Sepal_Width: 2.6, Petal_Length: 4, Petal_Width: 1.2, Species: "versicolor", sum: 0 },
            { id: "94", Sepal_Length: 5, Sepal_Width: 2.3, Petal_Length: 3.3, Petal_Width: 1, Species: "versicolor", sum: 0 },
            { id: "95", Sepal_Length: 5.6, Sepal_Width: 2.7, Petal_Length: 4.2, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "96", Sepal_Length: 5.7, Sepal_Width: 3, Petal_Length: 4.2, Petal_Width: 1.2, Species: "versicolor", sum: 0 },
            { id: "97", Sepal_Length: 5.7, Sepal_Width: 2.9, Petal_Length: 4.2, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "98", Sepal_Length: 6.2, Sepal_Width: 2.9, Petal_Length: 4.3, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "99", Sepal_Length: 5.1, Sepal_Width: 2.5, Petal_Length: 3, Petal_Width: 1.1, Species: "versicolor", sum: 0 },
            { id: "100", Sepal_Length: 5.7, Sepal_Width: 2.8, Petal_Length: 4.1, Petal_Width: 1.3, Species: "versicolor", sum: 0 },
            { id: "101", Sepal_Length: 6.3, Sepal_Width: 3.3, Petal_Length: 6, Petal_Width: 2.5, Species: "virginica", sum: 0 },
            { id: "102", Sepal_Length: 5.8, Sepal_Width: 2.7, Petal_Length: 5.1, Petal_Width: 1.9, Species: "virginica", sum: 0 },
            { id: "103", Sepal_Length: 7.1, Sepal_Width: 3, Petal_Length: 5.9, Petal_Width: 2.1, Species: "virginica", sum: 0 },
            { id: "104", Sepal_Length: 6.3, Sepal_Width: 2.9, Petal_Length: 5.6, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "105", Sepal_Length: 6.5, Sepal_Width: 3, Petal_Length: 5.8, Petal_Width: 2.2, Species: "virginica", sum: 0 },
            { id: "106", Sepal_Length: 7.6, Sepal_Width: 3, Petal_Length: 6.6, Petal_Width: 2.1, Species: "virginica", sum: 0 },
            { id: "107", Sepal_Length: 4.9, Sepal_Width: 2.5, Petal_Length: 4.5, Petal_Width: 1.7, Species: "virginica", sum: 0 },
            { id: "108", Sepal_Length: 7.3, Sepal_Width: 2.9, Petal_Length: 6.3, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "109", Sepal_Length: 6.7, Sepal_Width: 2.5, Petal_Length: 5.8, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "110", Sepal_Length: 7.2, Sepal_Width: 3.6, Petal_Length: 6.1, Petal_Width: 2.5, Species: "virginica", sum: 0 },
            { id: "111", Sepal_Length: 6.5, Sepal_Width: 3.2, Petal_Length: 5.1, Petal_Width: 2, Species: "virginica", sum: 0 },
            { id: "112", Sepal_Length: 6.4, Sepal_Width: 2.7, Petal_Length: 5.3, Petal_Width: 1.9, Species: "virginica", sum: 0 },
            { id: "113", Sepal_Length: 6.8, Sepal_Width: 3, Petal_Length: 5.5, Petal_Width: 2.1, Species: "virginica", sum: 0 },
            { id: "114", Sepal_Length: 5.7, Sepal_Width: 2.5, Petal_Length: 5, Petal_Width: 2, Species: "virginica", sum: 0 },
            { id: "115", Sepal_Length: 5.8, Sepal_Width: 2.8, Petal_Length: 5.1, Petal_Width: 2.4, Species: "virginica", sum: 0 },
            { id: "116", Sepal_Length: 6.4, Sepal_Width: 3.2, Petal_Length: 5.3, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "117", Sepal_Length: 6.5, Sepal_Width: 3, Petal_Length: 5.5, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "118", Sepal_Length: 7.7, Sepal_Width: 3.8, Petal_Length: 6.7, Petal_Width: 2.2, Species: "virginica", sum: 0 },
            { id: "119", Sepal_Length: 7.7, Sepal_Width: 2.6, Petal_Length: 6.9, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "120", Sepal_Length: 6, Sepal_Width: 2.2, Petal_Length: 5, Petal_Width: 1.5, Species: "virginica", sum: 0 },
            { id: "121", Sepal_Length: 6.9, Sepal_Width: 3.2, Petal_Length: 5.7, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "122", Sepal_Length: 5.6, Sepal_Width: 2.8, Petal_Length: 4.9, Petal_Width: 2, Species: "virginica", sum: 0 },
            { id: "123", Sepal_Length: 7.7, Sepal_Width: 2.8, Petal_Length: 6.7, Petal_Width: 2, Species: "virginica", sum: 0 },
            { id: "124", Sepal_Length: 6.3, Sepal_Width: 2.7, Petal_Length: 4.9, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "125", Sepal_Length: 6.7, Sepal_Width: 3.3, Petal_Length: 5.7, Petal_Width: 2.1, Species: "virginica", sum: 0 },
            { id: "126", Sepal_Length: 7.2, Sepal_Width: 3.2, Petal_Length: 6, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "127", Sepal_Length: 6.2, Sepal_Width: 2.8, Petal_Length: 4.8, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "128", Sepal_Length: 6.1, Sepal_Width: 3, Petal_Length: 4.9, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "129", Sepal_Length: 6.4, Sepal_Width: 2.8, Petal_Length: 5.6, Petal_Width: 2.1, Species: "virginica", sum: 0 },
            { id: "130", Sepal_Length: 7.2, Sepal_Width: 3, Petal_Length: 5.8, Petal_Width: 1.6, Species: "virginica", sum: 0 },
            { id: "131", Sepal_Length: 7.4, Sepal_Width: 2.8, Petal_Length: 6.1, Petal_Width: 1.9, Species: "virginica", sum: 0 },
            { id: "132", Sepal_Length: 7.9, Sepal_Width: 3.8, Petal_Length: 6.4, Petal_Width: 2, Species: "virginica", sum: 0 },
            { id: "133", Sepal_Length: 6.4, Sepal_Width: 2.8, Petal_Length: 5.6, Petal_Width: 2.2, Species: "virginica", sum: 0 },
            { id: "134", Sepal_Length: 6.3, Sepal_Width: 2.8, Petal_Length: 5.1, Petal_Width: 1.5, Species: "virginica", sum: 0 },
            { id: "135", Sepal_Length: 6.1, Sepal_Width: 2.6, Petal_Length: 5.6, Petal_Width: 1.4, Species: "virginica", sum: 0 },
            { id: "136", Sepal_Length: 7.7, Sepal_Width: 3, Petal_Length: 6.1, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "137", Sepal_Length: 6.3, Sepal_Width: 3.4, Petal_Length: 5.6, Petal_Width: 2.4, Species: "virginica", sum: 0 },
            { id: "138", Sepal_Length: 6.4, Sepal_Width: 3.1, Petal_Length: 5.5, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "139", Sepal_Length: 6, Sepal_Width: 3, Petal_Length: 4.8, Petal_Width: 1.8, Species: "virginica", sum: 0 },
            { id: "140", Sepal_Length: 6.9, Sepal_Width: 3.1, Petal_Length: 5.4, Petal_Width: 2.1, Species: "virginica", sum: 0 },
            { id: "141", Sepal_Length: 6.7, Sepal_Width: 3.1, Petal_Length: 5.6, Petal_Width: 2.4, Species: "virginica", sum: 0 },
            { id: "142", Sepal_Length: 6.9, Sepal_Width: 3.1, Petal_Length: 5.1, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "143", Sepal_Length: 5.8, Sepal_Width: 2.7, Petal_Length: 5.1, Petal_Width: 1.9, Species: "virginica", sum: 0 },
            { id: "144", Sepal_Length: 6.8, Sepal_Width: 3.2, Petal_Length: 5.9, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "145", Sepal_Length: 6.7, Sepal_Width: 3.3, Petal_Length: 5.7, Petal_Width: 2.5, Species: "virginica", sum: 0 },
            { id: "146", Sepal_Length: 6.7, Sepal_Width: 3, Petal_Length: 5.2, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "147", Sepal_Length: 6.3, Sepal_Width: 2.5, Petal_Length: 5, Petal_Width: 1.9, Species: "virginica", sum: 0 },
            { id: "148", Sepal_Length: 6.5, Sepal_Width: 3, Petal_Length: 5.2, Petal_Width: 2, Species: "virginica", sum: 0 },
            { id: "149", Sepal_Length: 6.2, Sepal_Width: 3.4, Petal_Length: 5.4, Petal_Width: 2.3, Species: "virginica", sum: 0 },
            { id: "150", Sepal_Length: 5.9, Sepal_Width: 3, Petal_Length: 5.1, Petal_Width: 1.8, Species: "virginica", sum: 0 },];
            var SepalData = [], PetalData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].Species === 'setosa') {
                    SepalData.push({
                        value: [data[i].Sepal_Length, data[i].Sepal_Width], itemStyle: {
                            normal: { color: 'blue' }, tooltip: {formatter: 'setosa'}
                        }
                    });
                } else if (data[i].Species === 'versicolor') {
                    SepalData.push({
                        value: [data[i].Sepal_Length, data[i].Sepal_Width], itemStyle: {
                            normal: { color: 'green' }
                        }
                    });
                } else {
                    SepalData.push({
                        value: [data[i].Sepal_Length, data[i].Sepal_Width], itemStyle: {
                            normal: { color: 'red' }
                        }
                    });
                }

            }
            for (let i = 0; i < data.length; i++) {
                if (data[i].Species === 'setosa') {
                    PetalData.push({
                        value: [data[i].Petal_Length, data[i].Petal_Width], itemStyle: {
                            normal: { color: 'blue' }
                        }
                    });
                } else if (data[i].Species === 'versicolor') {
                    PetalData.push({
                        value: [data[i].Petal_Length, data[i].Petal_Width], itemStyle: {
                            normal: { color: 'green' }
                        }
                    });
                } else {
                    PetalData.push({
                        value: [data[i].Petal_Length, data[i].Petal_Width], itemStyle: {
                            normal: { color: 'red' }
                        }
                    });
                }
            }
            yield put({
                type: 'updateData',
                payload: { data: data, SepalData: SepalData, PetalData: PetalData },
            });
        },
    },

    reducers: {
        updateData(state, { payload }) {
            return {
                ...state,
                data: payload.data,
                SepalData: payload.SepalData,
                PetalData: payload.PetalData,
            };
        },
        replaceFormData(state) {
            return {
                ...state,
                formData: {},
            };
        },
        changeFormFields(state, { payload }) {
            const data = payload || formData;
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...data,
                },
            };
        },
    },

};