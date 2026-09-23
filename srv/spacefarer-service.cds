using galactic from '../db/schema';

service SpacefarerService @(requires: 'authenticated-user') {
    entity Spacefarers as projection on galactic.Spacefarers;
    annotate Spacefarers with @odata.draft.enabled;
    entity Departments as projection on galactic.Departments;
    entity Positions   as projection on galactic.Positions;
}
