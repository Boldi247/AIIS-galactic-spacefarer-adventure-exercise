namespace galactic;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Spacefarers : cuid, managed {
    name                    : String(100);
    originPlanet            : String(100);
    spaceSuitColor          : String(50);
    stardustCollection      : Integer;
    wormholeNavigationSkill : Integer;
    department              : Association to Departments;
    position                : Association to Positions;
}

entity Departments : cuid {
    name        : String(100);
    spacefarers : Association to many Spacefarers
                      on spacefarers.department = $self;
}

entity Positions : cuid {
    title : String(100);
    level : Integer;
}
