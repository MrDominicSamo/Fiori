namespace asset;

entity Assets {
    key ID          : UUID;
        name        : String(100);
        category    : String(50);
        location    : String(100);
        status      : String(20);
        assignedTo  : String(100);
}