import { navItemsADMIN, rolesADMIN, navItemsSECRETARY, rolesSECRETARY, navItemsUSER, rolesUSER, navItemsDIRECTOR, rolesDIRECTOR } from "./constants";

export function filterNavItems(role: string){
    if (role === "ADMIN"){
      let onlyRoles = navItemsADMIN.filter(function (obj) {
        return rolesADMIN?.some(function (obj2: any) {
          return obj.id === obj2.id;
        });
      });
      return onlyRoles;
    }
    if (role === "DIRECTOR"){
      let onlyRoles = navItemsDIRECTOR.filter(function (obj) {
        return rolesDIRECTOR?.some(function (obj2: any) {
          return obj.id === obj2.id;
        });
      });
      return onlyRoles;
    }
    if (role === "SECRETARY"){
        let onlyRoles = navItemsSECRETARY.filter(function (obj) {
          return rolesSECRETARY?.some(function (obj2: any) {
            return obj.id === obj2.id;
          });
        });
        return onlyRoles;
    }
    if (role === "SUPERVISOR"){
        let onlyRoles = navItemsSECRETARY.filter(function (obj) {
          return rolesSECRETARY?.some(function (obj2: any) {
            return obj.id === obj2.id;
          });
        });
        return onlyRoles;
    }
    else{
      let onlyRoles = navItemsUSER.filter(function (obj) {
        return rolesUSER?.some(function (obj2: any) {
          return obj.id === obj2.id;
        });
      });
      return onlyRoles;
    }
    
  };