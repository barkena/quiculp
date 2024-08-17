function isOpFieldDef(fieldDef) {
    if (!fieldDef || typeof fieldDef !== 'object') {
        return false;
    }

    // Example extended criteria:
    // - Must have a 'type' property set to 'operation'
    // - Must have a 'name' property that is a non-empty string
    // - Optionally has a 'description' property that is a string
    
    if (fieldDef.type !== 'operation') {
        return false;
    }

    if (typeof fieldDef.name !== 'string' || fieldDef.name.trim() === '') {
        return false;
    }

    if (fieldDef.description && typeof fieldDef.description !== 'string') {
        return false;
    }

    return true;
}

// Example usage:
const validFieldDef = {
    name: 'multiply',
    type: 'operation',
    description: 'Multiplies two numbers'
};

console.log(isOpFieldDef(validFieldDef));  // Output: true

const invalidFieldDef = {
    name: '',
    type: 'operation',
    description: 123  // Invalid description type
};

console.log(isOpFieldDef(invalidFieldDef));  // Output: false
