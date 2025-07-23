interface AllergenDatabaseModalFormField {
    label: string;
    placeholder?: string;
    image?: string;
    type?: "text";
  }
  
  interface AllergenDatabaseModalFormSection {
    section: string;
    fields: AllergenDatabaseModalFormField[];
  }
  
  export const AllergenDatabaseModalData: AllergenDatabaseModalFormSection[] = [
    {
      section: "Allergen Details",
      fields: [
        { label: "Allergen Name", image: "/images/Educational/edit.svg", placeholder: "Enter Allergen Name" },
        {
          label: "Common Symptoms",
          placeholder: "Write common symptoms",
        },
      ],
    },
  ];