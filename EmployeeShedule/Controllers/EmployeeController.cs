using SafeMode.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SafeMode.Controllers
{
    public class EmployeeController : Controller
    {
        employeeSheduleEntities db = new employeeSheduleEntities();

        // GET: Employee
        public ActionResult Index(int? teamid, string firstname, string lastname, string email, string mobilenumber)
        {
            var teams = db.TEAMs;
            ViewBag.teamid = new SelectList(teams, "ID", "TeamName");

            var emp = db.EMPLOYEEs.AsQueryable();

            if (teamid != null)
            {
                emp = emp.Where(x => x.TeamID == teamid.Value);
            }

            if (!String.IsNullOrEmpty(firstname))
            {
                emp = emp.Where(x => x.FirstName.Contains(firstname));
            }

            if (!String.IsNullOrEmpty(lastname))
            {
                emp = emp.Where(x => x.LastName.Contains(lastname));
            }

            if (!String.IsNullOrEmpty(email))
            {
                emp = emp.Where(x => x.Email.Contains(email));
            }

            if (!String.IsNullOrEmpty(mobilenumber))
            {
                emp = emp.Where(x => x.MobileNo.Contains(mobilenumber));
            }


            return View(emp);
        }

        public ActionResult Create()
        {
            var teams = db.TEAMs;
            ViewBag.TeamID = new SelectList(teams, "ID", "TeamName");
            
            return View();
        }

        [HttpPost]
        public ActionResult Create(RegisterViewModel model)
        {

            if (!ModelState.IsValid)
            {
                var teams = db.TEAMs;
                ViewBag.TeamID = new SelectList(teams, "ID", "TeamName");

                return View(model);
            }


            return View(model);
        }
    }
}