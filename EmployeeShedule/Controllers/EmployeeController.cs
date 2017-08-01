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
        public ActionResult Index()
        {
            var teams = db.TEAMs;
            ViewBag.teamid = new SelectList(teams, "ID", "TeamName");
            return View();
        }
    }
}