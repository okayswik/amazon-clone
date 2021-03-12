import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //some fancy Firrbase login
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //fancyy firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZsAAAB6CAMAAABeKQ5ZAAAAwFBMVEX///8AAAD/mQD09PRiYmL/kwD/kQD/lwBpaWnp6en/lQB/f3+tra0zMzNbW1v5+flLS0t2dnaVlZXi4uK4uLifn5/U1NTCwsLLy8umpqbS0tLc3NxBQUHw8PCOjo5VVVUdHR0lJSUuLi5FRUX/9+7/4cT/7NqEhISRkZGzs7Nubm45OTn/8uT/uW9OTk4VFRX/wYL/1q//zZz/nyH/pjv/3Lv/s1//5cz/vHX/yZT/tWX/wH8ZGRn/rVH/qUT/2bQpWAZMAAAQ+klEQVR4nO1daUPiOhRVtEVxQQUExY1RURwd2QRxnvr//9Ura5t7TpZCAWU8X948mqRJTnK33NS1NY7z0snd5p/KeoDKwdbF7mlWU9AJuVIxny+VDSXKpXy+eHoer9mN492Lrcu956CTV2ebdyelmPVnRO40GFWxVN6YsZ2N4347p9suZbP5w3XE3r1pbg1vPvkzaeOswGavfLE3KbFZc10Epbtf2MnnnZK51rYzjDO+UXu4irx2v2Cbm/No09EHxa2wmUvb4EubhJghKrv6ag9Kyc1Jnx5EG4dyzEU5xTsO6zC3o+3k+r2+/ra+FuJO20xxH0s/Hxm6nT1TylYmRU9kM6bBw0wJnGjq3YtyR8Ofd0kTxWi93G9SoqDv3wDlS3Mn73TLb8tcT+CUN1LTldfP64UoeTj8eXuPtKKb4dwZKayikqM15WbbNMzFfViNcRfgQDfIPrJyKxIUeVWy3g3I0ylii2kM3aKS87A/+PWYN7JJmyg4dbnGqlJudFNxNK4l19MEFf3WLjl1cofWnZ2bI3OVM26NUG7Kukb+OMyvDmx1MG6YRTFE3jrQio4at/WjWX0zc2MRpgGoLcK42dC3sQUNXDt3mpgEhJu8oYWBqVI0vWOfU3Pn3Ekc4OzcMP1gr8W5MakPqXPcqVlfP3bgJmtq4HrNuHD6oDahOzV0e8/IjQs1lBzCjXn/q6JRL4AYHLgxN1i0i1BCjWkrItBqmY0b19WL9h1yY1y56+sP0dpG+YKANSknesuyK571qnAMNCZjuSdMp87EjcGlEgCDALmxNRaxhSw0ImzcHEqHR6Jo9TV+wdTGEbt9gLM+CzcxVi/0XI51c83WRGRhxpHjA8j9Lrm5/s/SgIPslgGmmHt74uJNy41icsVavffivZKbLau1GXp4VAAdFIrl3PEuVwvSjHK1v+NAOlIVUqZyXzzOlWkAcB13dzxujNM7xNklX2NC1cnK11e0Fn05cTQeJqt2g/rhC+BGBLSI03kWGox0JUqhFsuWUJYG8+HvhlNUIoyLwEa8WNEAk5HhI2U/Q0RuHYY9D26ELsclolgkbPbAnCgdMuw8k7rq9B5ggXBvkAib6oJOwc3YhUCTSTgwRB0JhaPj5uxhZ8uyga8vNSEqERuA58JYJOqIR24Ap+ztirFFiI8+x/145sTNXiFfPOHhwbHQAJEGJjLWPVILcG4Kw4BwTi/n94eroEx7r7wBRNql7OQfaIBFphBUzauuLw6vZHmurG7OzfPIEcqy6RkrdIgSQfdx4wgbiHIT7npdUDMcIYu8K2+ABQSuJW6c/zRsqGBBMpX4c8tz4nkpISPKzXX4nJgyv0eP5O/SBGR6WISrGDdRlcSDhNHpJfQpxzBy61+vSRBrE8oQ0HMK9QQIDQ3p++OejbbAuFEkNhH7monDWCquCyEuCDeKmZVjE6DqLHyuHBTI+RFClbeAZRyGhjMAB45XshUkOCoUGTeKMUWkxuhJ9u7smfwcAYpkVdkxbtQjGOLTiyYwjKG2cHKgrC5yxoehXYfkA+agCIGN9F3IVsyLl3AjHEQsEH26US7Wjg739/gRBFT9rT5HbsTLiR0ufEtUF3jAls2V8oW7rd/8EMksWDiYJpRqCvuOU4StRN5NuBEtoMx3z96BqlZuRIzfYoWuMUs+bt7VFNzQiKt0WdGOwnaxTORcnHAjqqP3757PBVWt3IgB2hU1GkNxuUEH0doC9opoMihBTmVxciP6Frl5ENXRQ3JKV+Pds3IjpwUKSP8EdZpz70aIzw3z+85kIbRjyIG30f1EbuTJIbq/8+TG2gI47dYmbIgt02hkG4QJTjtJXSMyO3yI3Eixifw7cLN9mj+5P8QVaeMGzjAqsgTYOobBWXB+XNw9OiQ+lJkbGn7HI2U8iiKGCDHFQ0sSuZEdw+ombsr5o8NrFgQcYk8tDdxARAWCZvbAkKF3I+SKhZ3LiraTFm5wn1FxhTPL8jWwqaKhBVkbla2Gm1xtx5LeaecGxgjcQLKGdQDqaPJ39nNQIzcsvM7eiaFYlpqITYWLD7gBYwK3MOOmRCPmABs3kIKUKDfle7ecFxM3NCDA8myxFPMA8aA3VKjADQScHPZN1pK3GMLGjTQS0f+Wx5rudlrNuqvHMHHDGqH56VgMc8BYfCEUHcANBMit3GS1ObCI2NxUZAnJDW5rPqeaHGoKAzcsRQLTR2i/MElkjQWMQiMauIHMSJstoE2QZ4jNDYRaJTe4dNhMle1H7RHouaHnaVT/EtnHuEHDImTazo1l38RLdIhtC4AIkfrGad/E2Nl96Llhpfn1CsINk2k4fc+TZ3ZujLbAuZMFECI2NyCPp+HGniuuQssNi9prTkkduSGReP3bYnETM2VySdzYrwcJ6LihCTeawo7cmOKZM3GjzZCtbN3X8qfHuYp8sAxudP7M1ebFbr+Tzuc3dLia+1SMG2Zpz40b7i0cFidjA22xBG54guBDcXLS4RxPYyRDEugYqKapfzMvbmjKraIZvwA3NDB5FJ19V25YnuEzLdkHScNh3MxJ37ADJjG3X4Ab0skD9XDQkRuau2C4hI6FmfhDMyWODa3lhiQtyiDx8rkhEQsphhy5qWBLLDNkAizNYp2o7MLM0Om5IdsGhC+MZ+HcYCdhgG7csKsvv0m5CXDWmSOEKjt0v6fnhhz+wZvBG180NyRSAxPvdO5J71kbD+dRy7Ndho0e6Vtw5gZbxWvqUGTR3KBphQdcGMwn3OBoNdfyJ0BpyvKssdVQ8k3NDbF/HN68YG6IR4JrHcsgNywBlX9tYQJ0VEkFYmmH5sXU3KABjffH0Y5cMDe4gIiKgDLIDY3nWrIK0K4jeTbx8gVcuUEpjeIUzYUFc+MiV8jSlbNOihjN5yGwCpaJl2fjyg2+GU1EfLM46pg3NyiKUN0QLS+TI2lA7vLgYH/z8OKkqPsSGtp/mPCLAfKIGzItN8TtRdeK2J1qgXlzg2oe7VjiAeWsJQT2CySOiXEENB6Q9UjwYFpuSCgP9w0ZhbrG5s0Nvh/3DTlkVleZ9ZMGQ2zJ8WM98P/ICo88TZAbvCZJRqAOe/HcQHobC8WohSqkBMeOqoOwgHw52irRg98EuQE1yxK51EKL5wZewPJnFYMq1i3p6+g5AJqyMtppTFVPkhtpIvKPsClFFs+NXLr8dDCqPWIeml6GRh4KtU3ry6OPE7QFpFXJ0ycUS3ve3JADJrF0+ZloNL2UFjAgYgSjKlOtDDQjldlJ0IYWVXX30zdMZRLmhiSaqPn+uo/3hKKF+jZGhJsOXVbF9SWhFcWzmpobdrs/Om/az2NG1+S8uWH5NUeW56IRemxjRMQUxIcRfUvsPzUJcWpu6IqbmGrbhvyJyOzOmxuqxyfknBtUyST5Nz43EfJJ7vTEEGPJjGpAYmpuuPlylj8PapTMX/sIhe68ueGa/tfudr+T5s/ojf3EmbhZYyli96fb58cnDh8Snpoby1foTAgDN3M/I6hM38uNJLhx+7zuCCLYOMP5TdyEvAgmBt3cuXH9vi3BSRLcxPpekMzdnZ6b2N+MCzEx1ebOzQy7u5gINzFMcIi2zZDL4XSXha2b0Heef76A0+cyWSfH1tas3DhG41im2wzcaD6+rqCItvZVZOvOnxuXjzJeEAYnLirh5vrhorBbq9V2CxeH++hhi3Msx5gP3KacQ+6ggmM0lZT2l5U7qKCvWMT1scj6UbnZLJTgtKac36lEy8gzRnoJUYJlvM+Uc0sy1LCg2jXVu1pEzq3tfsdAr6iSJ/rxwJCb5wvNn+gIcF4LhwLnvw43lNjn3Ge8R2DM0L8eeVJRAsTMLiRX3ezHjJyt6ApSJP+YmzvbGXS2NpoNPJu3WtI8B3HG+zeGD26GoYtQ5cgY+WLueBgM6fC4JFQ54viN/aZB+YENMsC5+ZoJu/yxNjM3Wk23Hy20RyoOYL8nncjdKN2Nwl9RITXeXvJo/VTzRw4oth80e8Bw3RSO+8YAbmDlWu6w05u4W0IADJYNfvIPNzusOWgd+JWGIL1HxqbmWrAw3Dn8jyglAM0n43f0yaFgxqC+kwGAK1mgpi7/B/K32Q41N1XKOwqIsi0cRLGP2z+7cx0pcL2jSRsT4bP9At6gDQg8m+kPK1qQh1DK2Ynxfafq7DDRV1BKXLDmtku7hULhZLd4rFkGG7P+ycQEcH5aOwl6uZvX/uFF968oTYds8WizMqTl+fKi+AXm5AcC2ew8t+c/jpvHavf29rb6eLPsnvwgRLVRf095vu97AYL/+KmPeuNx2b36QbX57vleJp1ORZBOZzw/1fvZQEvETbPlZxRWogRl/Ntld/CfRfddT8xo+yy7i0ngxfefvpkEqH74RmL68FdB6XykUxm/t+xexMGrnZlUyusuu5sJoOf1R5JuLLsfrnhMZaT4YlR5K6FwPvrkpL3WNxnMgInAGssMbWavr3f6ttnwXyvGzdqTP1h+fvs7iIEbP6Ah03p/6jVeuhFf86b6WU95EX3zHQbjgJ4/FA7+xzcY0ONLVWu6NEJyVsIW6ONlpF2/BzsGhOT4y+5KYqiOZXUg2b61oPbHBkJq2T1JDjft8YpL+62XZfdmerTGa+x92T1JEk/jJRfYbKlvY1FLtEfcZOrL7kmiaIQuXdrz6t8sVjDCeN9433jvM1SjXl3G73wPs6Da+Iz831gy+99zaRnQ8UNy+orn64u2ZssPfNDJKroZDSDdWman5oOGEqoKRNtrddldMqD65HuDKIE3/qXrraS6GeKxFfGtB6Kt1fya4mFwgDOWYOMV1MysVlRAoC6ivGnPf/96ivXlfbhlhKP5PjYFltm3OaIrA719et6+kkfaffK86ALyJ3pxLNKeltm9uYIckGQ87+lr0NOtp31l8aT9iaHW9VdapA3QTXmSnAE9b8sWbrevGXkY7bVDfVgfkrZKARsCqXXG9PjvzWUFeG8aHd8Dcasc2Y48z0xzSV1cEKptfvIb6J7U38VLt2qv7XvYIa8VtfEfxyLta1qWCaKRkYt0TE+wfT56ixPp1WbHo2k1aV/dIL1hhzOvC+va8vBXnzSRzvjee3P+/FQbb2m2YQbMvIv9MRJpK3OsZsTjuymlJeDHb9c/5zUTN91mJyOyACLwUtIwqfr/zrbpo6tROyE/nu991F+SJSig5S2lp6VPgI/6fmSlrb62meClxUWKJKj92rxNgKHqZ68TSLGMMW0z4/8ltzKGuVDet8q1mxWfKSs7Q4I83291eo3uVBQ93jbqnZQPyeeMGZqIejtMF1rBCLQRDSd2BlMzpCjd7vxtNhwuxNxUbxvNv512pn9Lw8rKkJk3zn1nUHmVQwIafLZcEl0jFE2S+9Kt9kfn6bVe7zVH6PXqr69PnY9WapD815dfzm0He0azK4dHN94qHg5Ycfvha/wdO08BUSN4k3+lea6ssSXTUXmzH2bKtBc5JV8I1TfLxYr5Iu2lTLGYvnOz4oE0I256aVfFkzQxGf/DGGjth6DT3j/hdWpxa7uVNBdmvEzdMu1vmaDUVz5AXwhueqkpNc+0xLgcvPrB1vq3d80I3VdvQbItIKbtlLAQuFb/TjzAghdymLI0Ytb6jtJ8x/vN8PIEh5AJ8jI4x/vZCtOj22sZQ5LTEuP5qddln3+vAG4+n9IJ8tPfL5nOz6c1EsNjwxLSd+cl9db80RxJ4+a2956xBfe1rAy2y0f95UfBzA2Pt723lnNIOTWJW7feegkfz/2A47HbqL8Nw/7eKKqZjtIxiH0OvtvktTp/EzmS+0FMPHZvP5u9+lPnvd1ujalptT46b3/r4gr66uJ/OrA2yX/rjdkAAAAASUVORK5CYII="
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5> E-mail </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> Password </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            {" "}
            Sign In
          </button>
        </form>
        <p>By Signing In you agree to our terms and conditions!</p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
