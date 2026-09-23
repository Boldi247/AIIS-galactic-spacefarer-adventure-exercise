using SpacefarerService as service from '../../srv/spacefarer-service';

annotate service.Spacefarers with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Value: email,
            },
            {
                $Type: 'UI.DataField',
                Value: originPlanet,
            },
            {
                $Type: 'UI.DataField',
                Value: spaceSuitColor,
            },
            {
                $Type: 'UI.DataField',
                Value: stardustCollection,
            },
            {
                $Type: 'UI.DataField',
                Value: wormholeNavigationSkill,
            },
            {
                $Type: 'UI.DataField',
                Value: department_ID,
            },
            {
                $Type: 'UI.DataField',
                Value: position_ID,
            },
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Value: name,
        },
        {
            $Type: 'UI.DataField',
            Value: spaceSuitColor,
        },
        {
            $Type: 'UI.DataField',
            Value: stardustCollection,
        },
    ],
    UI.SelectionFields           : [
        originPlanet,
        spaceSuitColor,
        department.name,
        position.title,
        position.level,
        stardustCollection,
        wormholeNavigationSkill
    ]
);

annotate service.Spacefarers with {
    department @Common.ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'Departments',
        Parameters    : [
            {
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: department_ID,
                ValueListProperty: 'ID',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'name',
            },
        ],
    }
};

annotate service.Spacefarers with {
    position @Common.ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'Positions',
        Parameters    : [
            {
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: position_ID,
                ValueListProperty: 'ID',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'title',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'level',
            },
        ],
    }
};
