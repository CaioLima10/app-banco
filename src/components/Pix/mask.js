export const currentMask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    const numericValue = parseInt(value);
    const formattedValue = formatCurrency(numericValue);

    e.target.value = formattedValue;

    return e;
};

const formatCurrency = (value) => {
    const separator = ".";
    const decimalPlaces = 2;

    const intValue = Math.floor(value / Math.pow(10, decimalPlaces));
    const decimalValue = (value % Math.pow(10, decimalPlaces)).toString().padStart(decimalPlaces, "0");

    const formattedValue = `${intValue.toLocaleString()}${separator}${decimalValue}`;
    return formattedValue;
};
