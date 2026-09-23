using galactic from '../db/schema';

service SpacefarerService @(requires: 'authenticated-user') {
    entity Spacefarers @(restrict: [
        {
            grant: '*',
            to   : 'admin'
        },
        {
            grant: '*',
            to   : 'spacefarer',
            where: 'originPlanet = $user.planet'
        }
    ])                 as projection on galactic.Spacefarers;

    annotate Spacefarers with @odata.draft.enabled;
    entity Departments as projection on galactic.Departments;
    entity Positions   as projection on galactic.Positions;
}
