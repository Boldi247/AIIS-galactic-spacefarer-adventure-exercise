namespace galactic;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Spacefarers : cuid, managed {
    name                    : String(100);
    email                   : String(100);
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

annotate galactic.Spacefarers with {
    name                    @title: 'Name'              @mandatory;
    email                   @title: 'Email'             @mandatory;
    originPlanet            @title: 'Origin Planet'     @mandatory;
    spaceSuitColor          @title: 'Space Suit Color'  @mandatory;
    stardustCollection      @title: 'Stardust Collection';
    wormholeNavigationSkill @title: 'Wormhole Navigation Skill';
    department              @title: 'Department ID';
    position                @title: 'Position ID';
}

annotate galactic.Departments with {
    name        @title: 'Department Name';
    spacefarers @title: 'Spacefarers';
}

annotate galactic.Positions with {
    title @title: 'Position Title';
    level @title: 'Position Level';
}
